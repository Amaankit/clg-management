import {
  IsOptional,
  IsBoolean,
  IsString,
  IsNumberString,
  Validate,
} from 'class-validator';
function isValidCommaSeparatedList(value: string): boolean {
  // Check if the value is a comma-separated list of strings
  const regex = /^(\w+,)*\w+$/;
  return regex.test(value);
}
export class SubjectsParamsDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  code: string;

  @IsBoolean()
  @IsOptional()
  is_active: boolean;

  @IsString()
  @IsOptional()
  @Validate((value: string) => isValidCommaSeparatedList(value), {
    message: 'Batches should be a comma-separated list of strings.',
  })
  batches: string;

  @IsNumberString()
  @IsOptional()
  page: number;
}
