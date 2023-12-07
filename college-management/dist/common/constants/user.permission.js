"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONLY_FACULTY = exports.ONLY_ADMIN = exports.ONLY_STUDENT = exports.COMMON_PERMISSION = void 0;
const user_enum_1 = require("../../user/user.enum");
exports.COMMON_PERMISSION = [
    user_enum_1.UserGroups.STUDENT,
    user_enum_1.UserGroups.ADMIN,
    user_enum_1.UserGroups.FACULTY,
];
exports.ONLY_STUDENT = [user_enum_1.UserGroups.STUDENT];
exports.ONLY_ADMIN = [user_enum_1.UserGroups.ADMIN];
exports.ONLY_FACULTY = [user_enum_1.UserGroups.FACULTY];
//# sourceMappingURL=user.permission.js.map