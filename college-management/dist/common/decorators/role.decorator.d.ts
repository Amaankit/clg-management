import { UserGroups } from './../../user/user.enum';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: UserGroups[]) => import("@nestjs/common").CustomDecorator<string>;
