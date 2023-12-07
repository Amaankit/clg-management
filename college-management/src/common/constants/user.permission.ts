import { UserGroups } from '../../user/user.enum';
export const COMMON_PERMISSION = [
  UserGroups.STUDENT,
  UserGroups.ADMIN,
  UserGroups.FACULTY,
];
export const ONLY_STUDENT = [UserGroups.STUDENT];
export const ONLY_ADMIN = [UserGroups.ADMIN];
export const ONLY_FACULTY = [UserGroups.FACULTY];
