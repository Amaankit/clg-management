"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const constants_1 = require("../common/constants/constants");
const subject_utils_1 = require("./subject.utils");
let SubjectService = class SubjectService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createSubjectDto) {
        const existing = await this.prismaService.subject.findUnique({
            where: { code: createSubjectDto.code },
        });
        if (existing) {
            throw new common_1.ConflictException('Subject with this code is already exists. ');
        }
        const { batches } = createSubjectDto, createSubject = __rest(createSubjectDto, ["batches"]);
        const subject = await this.prismaService.subject.create({
            data: Object.assign(Object.assign({}, createSubject), { batches: {
                    connect: batches === null || batches === void 0 ? void 0 : batches.map((batchId) => ({ id: batchId })),
                } }),
        });
        return subject;
    }
    async findAll(query, usergroup) {
        const where = {};
        const name = query.name;
        const code = query.code;
        const isActive = query.is_active;
        const batches = query.batches;
        const page = query.page || 1;
        if (batches) {
            where.batches = {
                some: {
                    id: {
                        in: batches.split(',').map(Number),
                    },
                },
            };
        }
        if (name) {
            where.name = { contains: name, mode: 'insensitive' };
        }
        if (code) {
            where.code = code;
        }
        if (usergroup === 'STUDENT' || usergroup === 'FACULTY') {
            where.is_active = true;
        }
        else if (isActive !== undefined) {
            where.is_active = isActive;
        }
        return (0, constants_1.paginate)(this.prismaService.subject, {
            where,
            orderBy: constants_1.orderBy,
            include: subject_utils_1.subjectIncludes,
        }, {
            page,
        });
    }
    async findOne(id, usergroup) {
        const whereClause = { id };
        if (usergroup === 'STUDENT' || usergroup === 'FACULTY') {
            whereClause.is_active = true;
        }
        const subject = await this.prismaService.subject.findFirst({
            where: whereClause,
        });
        if (!subject) {
            throw new common_1.NotFoundException();
        }
        return subject;
    }
    async update(id, updateSubjectDto) {
        const existing = await this.prismaService.subject.findFirst({
            where: {
                code: updateSubjectDto.code,
                NOT: {
                    id: id,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Subject with this name is already exists. ');
        }
        const { batches } = updateSubjectDto, updateSubject = __rest(updateSubjectDto, ["batches"]);
        const subject = await this.prismaService.subject.update({
            where: { id },
            data: Object.assign(Object.assign({}, updateSubject), { batches: {
                    connect: batches === null || batches === void 0 ? void 0 : batches.map((batchId) => ({ id: batchId })),
                } }),
        });
        return subject;
    }
};
exports.SubjectService = SubjectService;
exports.SubjectService = SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], SubjectService);
//# sourceMappingURL=subject.service.js.map