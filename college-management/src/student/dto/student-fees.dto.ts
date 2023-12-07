import { IsNumber, IsInt } from 'class-validator';

export class CreateStudentFees {
  @IsNumber()
  amount: number;

  @IsInt()
  studentId: number;

  @IsInt()
  feesId: number;
}
