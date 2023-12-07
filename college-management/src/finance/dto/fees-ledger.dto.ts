import {
  IsString,
  IsNumberString,
  IsNotEmpty,
  IsIn,
  IsInt,
  IsOptional,
} from 'class-validator';
import { IsDateStringWithFormat } from '../../common/validators/dateformat.validator';
export class FeesLedgerDTO {
  @IsNumberString()
  amount: string;

  @IsInt()
  studentId: number;

  @IsOptional()
  @IsInt()
  transactionId: number;

  @IsNotEmpty()
  @IsString()
  @IsIn(['Cash', 'Online', 'Cheque'])
  paymentMode: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

  @IsDateStringWithFormat()
  paymentData: string;
}
