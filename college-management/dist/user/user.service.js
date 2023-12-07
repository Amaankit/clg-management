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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
let UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getUser(username) {
        const user = await this.prismaService.user.findUnique({
            where: { username },
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        delete user.password;
        return user;
    }
    async createUser(data) {
        const whereConditions = {
            OR: [
                {
                    email: data.email,
                },
                {
                    username: data.username,
                },
                {
                    phonenumber: data.phonenumber,
                },
            ],
        };
        const existing = await this.prismaService.user.findFirst({
            where: data.email && data.email.length
                ? whereConditions
                : {
                    OR: [
                        {
                            username: data.username,
                        },
                        {
                            phonenumber: data.phonenumber,
                        },
                    ],
                },
        });
        if (existing) {
            throw new common_1.ConflictException('User With this details are already Exists');
        }
        const hashedPassword = await bcrypt.hash(data.password, bcrypt.genSaltSync());
        const user = await this.prismaService.user.create({
            data: Object.assign(Object.assign({}, data), { password: hashedPassword, usergroup: 'STUDENT', is_active: true, updated_at: new Date(), uuid: (0, uuid_1.v4)() }),
        });
        delete user.password;
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map