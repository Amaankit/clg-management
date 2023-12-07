import { IsNotEmpty, IsNumber } from 'class-validator';

export class UserParamDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
