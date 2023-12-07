// create-subject.dto.ts
import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsArray,
} from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  external_marks?: number;

  @IsOptional()
  @IsNumber()
  internal_marks?: number;

  @IsOptional()
  @IsNumber()
  internal_prac_marks?: number;

  @IsOptional()
  @IsNumber()
  external_prac_marks?: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsOptional()
  @IsArray()
  batches?: number[]; // Assuming batch IDs, you can adjust the type as needed
}
