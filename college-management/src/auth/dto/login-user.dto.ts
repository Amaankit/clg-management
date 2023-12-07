import { IsString, Length, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 10)
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 15)
  password: string;
}
