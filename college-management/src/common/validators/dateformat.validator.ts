// src/validators/is-date-string.validator.ts

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'isDateStringWithFormat', async: false })
export class IsDateStringWithFormatConstraint
  implements ValidatorConstraintInterface
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(value: string, args: ValidationArguments): boolean {
    if (typeof value !== 'string') {
      return false;
    }

    // Define your specific date format using a regular expression
    const dateFormatRegExp = /^\d{4}-\d{2}-\d{2}$/;

    return dateFormatRegExp.test(value);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be a valid date string in the format YYYY-MM-DD.`;
  }
}

// Decorator Factory Function
export function IsDateStringWithFormat() {
  return (object: any, propertyName: string) => {
    registerDecorator({
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
