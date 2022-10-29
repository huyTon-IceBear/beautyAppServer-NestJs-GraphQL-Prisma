"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const condition_service_1 = require("./condition.service");
const create_condition_input_1 = require("./dto/create-condition.input");
const update_condition_input_1 = require("./dto/update-condition.input");
let ConditionResolver = class ConditionResolver {
    constructor(conditionService) {
        this.conditionService = conditionService;
    }
    create(createConditionInput) {
        return this.conditionService.create(createConditionInput);
    }
    findAll() {
        return this.conditionService.findAll();
    }
    findOne(id) {
        return this.conditionService.findOne(id);
    }
    update(updateConditionInput) {
        return this.conditionService.update(updateConditionInput.id, updateConditionInput);
    }
    remove(id) {
        return this.conditionService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createCondition'),
    __param(0, (0, graphql_1.Args)('createConditionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_condition_input_1.CreateConditionInput !== "undefined" && create_condition_input_1.CreateConditionInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], ConditionResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('condition'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConditionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('condition'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConditionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateCondition'),
    __param(0, (0, graphql_1.Args)('updateConditionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_condition_input_1.UpdateConditionInput !== "undefined" && update_condition_input_1.UpdateConditionInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ConditionResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeCondition'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConditionResolver.prototype, "remove", null);
ConditionResolver = __decorate([
    (0, graphql_1.Resolver)('Condition'),
    __metadata("design:paramtypes", [condition_service_1.ConditionService])
], ConditionResolver);
exports.ConditionResolver = ConditionResolver;
//# sourceMappingURL=condition.resolver.js.map