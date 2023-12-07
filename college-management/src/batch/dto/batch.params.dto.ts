import {
  IsOptional,
  IsBoolean,
  IsString,
  IsNumberString,
} from 'class-validator';
export class BatchParamsDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  is_active: boolean;

  @IsNumberString()
  @IsOptional()
  page: number;
}
