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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const constants_1 = require("../common/constants/constants");
let BatchService = class BatchService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createBatchDto) {
        const existing = await this.prismaService.batch.findUnique({
            where: { name: createBatchDto.name },
        });
        if (existing) {
            throw new common_1.ConflictException('Batch with this name is already exists. ');
        }
        const batch = await this.prismaService.batch.create({
            data: {
                name: createBatchDto.name,
            },
        });
        return batch;
    }
    async findAll(query, usergroup) {
        const where = {};
        const name = query.name;
        const isActive = query.is_active;
        const page = query.page || 1;
        if (name) {
            where.name = { contains: name, mode: 'insensitive' };
        }
        if (usergroup === 'STUDENT' || usergroup === 'FACULTY') {
            where.is_active = true;
        }
        else if (isActive !== undefined) {
            where.is_active = isActive;
        }
        return (0, constants_1.paginate)(this.prismaService.batch, {
            where,
            orderBy: constants_1.orderBy,
        }, {
            page,
        });
    }
    async findOne(id, usergroup) {
        const whereClause = { id };
        if (usergroup === 'STUDENT' || usergroup === 'FACULTY') {
            whereClause.is_active = true;
        }
        const batch = await this.prismaService.batch.findFirst({
            where: whereClause,
        });
        if (!batch) {
            throw new common_1.NotFoundException();
        }
        return batch;
    }
    async update(id, updateBatchDto) {
        const existing = await this.prismaService.batch.findFirst({
            where: {
                name: updateBatchDto.name,
                NOT: {
                    id: id,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Batch with this name is already exists. ');
        }
        const batch = await this.prismaService.batch.update({
            where: { id },
            data: updateBatchDto,
        });
        return batch;
    }
    remove(id) {
        return `This action removes a #${id} batch`;
    }
};
exports.BatchService = BatchService;
exports.BatchService = BatchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], BatchService);
//# sourceMappingURL=batch.service.js.map