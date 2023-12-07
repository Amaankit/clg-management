import { IsOptional, IsNotEmpty, IsBoolean, IsString } from 'class-validator';
export class CreateBatchDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  is_active: boolean;
}
