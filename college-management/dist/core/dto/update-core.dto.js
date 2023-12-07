"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCoreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_core_dto_1 = require("./create-core.dto");
class UpdateCoreDto extends (0, mapped_types_1.PartialType)(create_core_dto_1.CreateCoreDto) {
}
exports.UpdateCoreDto = UpdateCoreDto;
//# sourceMappingURL=update-core.dto.js.map