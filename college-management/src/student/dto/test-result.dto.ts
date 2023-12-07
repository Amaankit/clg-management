import { IsNumber, IsString, IsIn, IsInt } from 'class-validator';

export class CreateTestResult {
  @IsNumber()
  amount: number;

  @IsInt()
  studentId: number;

  @IsInt()
  feesId: number;

  @IsString()
  @IsIn(['Pass', 'Fail', 'Grace'], {
    message: 'Invalid test result. Must be one of: Pass, Fail, Grace',
  })
  remarksType: string;

  @IsString()
  remarks: string;
}

export class UpdateTestResult {
  @IsNumber()
  amount: number;

  @IsString()
  @IsIn(['Pass', 'Fail', 'Grace'], {
    message: 'Invalid test result. Must be one of: Pass, Fail, Grace',
  })
  remarksType: string;

  @IsString()
  remarks: string;
}
