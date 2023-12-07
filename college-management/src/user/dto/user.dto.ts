// user.dto.ts
import {
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsEnum,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserGroups } from '../user.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  phonenumber: string;

  @IsNotEmpty()
  @IsEnum(UserGroups)
  usergroup: UserGroups;

  @IsNotEmpty()
  @IsString()
  fullname: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;

  @IsString()
  @MaxLength(15)
  phonenumber: string;

  @IsEnum(UserGroups)
  usergroup: UserGroups;

  @IsString()
  @IsNotEmpty()
  fullname: string;
}
