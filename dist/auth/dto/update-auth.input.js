"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthInput = void 0;
const create_auth_input_1 = require("./create-auth.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateAuthInput extends (0, mapped_types_1.PartialType)(create_auth_input_1.CreateAuthInput) {
}
exports.UpdateAuthInput = UpdateAuthInput;
//# sourceMappingURL=update-auth.input.js.map