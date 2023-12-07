import { IsString, IsNotEmpty, IsNumber, IsIn } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateFeesDTO {
  @IsString()
  @IsIn(['Active', 'Deactive'])
  type: string;

  @IsNumber()
  amount: number;
}

export class UpdateAttendanceDTO {
  @IsString()
  @IsNotEmpty()
  status: string;
}

export class UpdateFeesDTO extends PartialType(CreateFeesDTO) {}
