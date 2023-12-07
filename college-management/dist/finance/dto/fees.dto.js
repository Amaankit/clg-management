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
exports.UpdateFeesDTO = exports.UpdateAttendanceDTO = exports.CreateFeesDTO = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateFeesDTO {
}
exports.CreateFeesDTO = CreateFeesDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['Active', 'Deactive']),
    __metadata("design:type", String)
], CreateFeesDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFeesDTO.prototype, "amount", void 0);
class UpdateAttendanceDTO {
}
exports.UpdateAttendanceDTO = UpdateAttendanceDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAttendanceDTO.prototype, "status", void 0);
class UpdateFeesDTO extends (0, mapped_types_1.PartialType)(CreateFeesDTO) {
}
exports.UpdateFeesDTO = UpdateFeesDTO;
//# sourceMappingURL=fees.dto.js.map