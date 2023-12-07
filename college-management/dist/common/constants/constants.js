"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderBy = exports.paginate = exports.PAGE_SIZE = void 0;
const paginator_1 = require("../pagination/paginator");
exports.PAGE_SIZE = 1;
exports.paginate = (0, paginator_1.paginator)({ perPage: exports.PAGE_SIZE });
exports.orderBy = { id: 'desc' };
//# sourceMappingURL=constants.js.map