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
exports.FeesLedgerDTO = void 0;
const class_validator_1 = require("class-validator");
const dateformat_validator_1 = require("../../common/validators/dateformat.validator");
class FeesLedgerDTO {
}
exports.FeesLedgerDTO = FeesLedgerDTO;
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], FeesLedgerDTO.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], FeesLedgerDTO.prototype, "studentId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], FeesLedgerDTO.prototype, "transactionId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['Cash', 'Online', 'Cheque']),
    __metadata("design:type", String)
], FeesLedgerDTO.prototype, "paymentMode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FeesLedgerDTO.prototype, "remarks", void 0);
__decorate([
    (0, dateformat_validator_1.IsDateStringWithFormat)(),
    __metadata("design:type", String)
], FeesLedgerDTO.prototype, "paymentData", void 0);
//# sourceMappingURL=fees-ledger.dto.js.map