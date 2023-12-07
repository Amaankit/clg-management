import { IsString, IsNumberString, IsNotEmpty } from 'class-validator';
import { IsDateStringWithFormat } from '../../common/validators/dateformat.validator';

export class CreateAttendanceDTO {
  @IsDateStringWithFormat()
  date: string;

  @IsNumberString()
  studentId: string;

  @IsNumberString()
  subjectId: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}

export class UpdateAttendanceDTO {
  @IsString()
  @IsNotEmpty()
  status: string;
}
