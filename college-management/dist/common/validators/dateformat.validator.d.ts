import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsDateStringWithFormatConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsDateStringWithFormat(): (object: any, propertyName: string) => void;
