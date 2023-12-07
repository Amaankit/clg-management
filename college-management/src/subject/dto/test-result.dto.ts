import {
  IsNumber,
  IsNumberString,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateTestResult {
  @IsNumber()
  marks: number;

  @IsNumberString()
  studentId: string;

  @IsNumberString()
  testId: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}

export class UpdateAttendanceDTO {
  @IsString()
  @IsNotEmpty()
  status: string;
}
