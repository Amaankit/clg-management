import { IsString, Length, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(5, 20)
  username: string;

  @IsString()
  @Length(6, 20)
  password: string;

  @IsString()
  @Length(3, 100)
  fullname: string;

  @IsString()
  @Length(10, 15)
  phonenumber: string;

  @IsOptional()
  @IsString()
  @Length(5, 50)
  email: string;
}
