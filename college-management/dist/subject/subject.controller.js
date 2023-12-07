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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const subject_service_1 = require("./subject.service");
const create_subject_dto_1 = require("./dto/create-subject.dto");
const update_subject_dto_1 = require("./dto/update-subject.dto");
const role_decorator_1 = require("../common/decorators/role.decorator");
const common_2 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const role_guard_1 = require("../common/guards/role.guard");
const subject_params_dto_1 = require("./dto/subject.params.dto");
const auth_user_decorator_1 = require("../common/decorators/auth-user.decorator");
const user_permission_1 = require("../common/constants/user.permission");
let SubjectController = class SubjectController {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    create(createSubjectDto) {
        return this.subjectService.create(createSubjectDto);
    }
    findAll(query, user) {
        return this.subjectService.findAll(query, user.usergroup);
    }
    findOne(id, user) {
        return this.subjectService.findOne(+id, user.usergroup);
    }
    update(id, updateSubjectDto) {
        return this.subjectService.update(+id, updateSubjectDto);
    }
};
exports.SubjectController = SubjectController;
__decorate([
    (0, role_decorator_1.Roles)(...user_permission_1.ONLY_ADMIN),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt'), role_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subject_dto_1.CreateSubjectDto]),
    __metadata("design:returntype", void 0)
], SubjectController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(...user_permission_1.COMMON_PERMISSION),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt'), role_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subject_params_dto_1.SubjectsParamsDto, Object]),
    __metadata("design:returntype", void 0)
], SubjectController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(...user_permission_1.COMMON_PERMISSION),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt'), role_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, auth_user_decorator_1.default)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SubjectController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(...user_permission_1.COMMON_PERMISSION),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt'), role_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subject_dto_1.UpdateSubjectDto]),
    __metadata("design:returntype", void 0)
], SubjectController.prototype, "update", null);
exports.SubjectController = SubjectController = __decorate([
    (0, common_1.Controller)('subject'),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
//# sourceMappingURL=subject.controller.js.map