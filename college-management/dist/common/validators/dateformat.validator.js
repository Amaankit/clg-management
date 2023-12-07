"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateStringWithFormat = exports.IsDateStringWithFormatConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsDateStringWithFormatConstraint = class IsDateStringWithFormatConstraint {
    validate(value, args) {
        if (typeof value !== 'string') {
            return false;
        }
        const dateFormatRegExp = /^\d{4}-\d{2}-\d{2}$/;
        return dateFormatRegExp.test(value);
    }
    defaultMessage(args) {
        return `${args.property} must be a valid date string in the format YYYY-MM-DD.`;
    }
};
exports.IsDateStringWithFormatConstraint = IsDateStringWithFormatConstraint;
exports.IsDateStringWithFormatConstraint = IsDateStringWithFormatConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isDateStringWithFormat', async: false })
], IsDateStringWithFormatConstraint);
function IsDateStringWithFormat() {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: `${propertyName} must be a valid date string in the format YYYY-MM-DD.`,
            },
            constraints: [],
            validator: IsDateStringWithFormatConstraint,
        });
    };
}
exports.IsDateStringWithFormat = IsDateStringWithFormat;
//# sourceMappingURL=dateformat.validator.js.map