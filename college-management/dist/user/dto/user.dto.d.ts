import { UserGroups } from '../user.enum';
export declare class CreateUserDto {
    username: string;
    email?: string;
    is_active: boolean;
    phonenumber: string;
    usergroup: UserGroups;
    fullname: string;
}
export declare class UpdateUserDto {
    email?: string;
    is_active: boolean;
    phonenumber: string;
    usergroup: UserGroups;
    fullname: string;
}
