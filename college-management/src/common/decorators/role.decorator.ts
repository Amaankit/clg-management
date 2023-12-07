import { SetMetadata } from '@nestjs/common';
import { UserGroups } from './../../user/user.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserGroups[]) => SetMetadata(ROLES_KEY, roles);
