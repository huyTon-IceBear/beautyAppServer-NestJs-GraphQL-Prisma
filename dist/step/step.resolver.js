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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../types/graphql");
const step_service_1 = require("./step.service");
let StepResolver = class StepResolver {
    constructor(stepService) {
        this.stepService = stepService;
    }
    create(createStepInput) {
        return this.stepService.create(createStepInput);
    }
    findAll() {
        return this.stepService.findAll();
    }
    findOne(id) {
        return this.stepService.findOne(id);
    }
    update(updateStepInput) {
        return this.stepService.update(updateStepInput.id, updateStepInput);
    }
    remove(id) {
        return this.stepService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createStep'),
    __param(0, (0, graphql_1.Args)('createStepInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.CreateStepInput]),
    __metadata("design:returntype", void 0)
], StepResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('step'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StepResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('step'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StepResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateStep'),
    __param(0, (0, graphql_1.Args)('updateStepInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.UpdateStepInput]),
    __metadata("design:returntype", void 0)
], StepResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeStep'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StepResolver.prototype, "remove", null);
StepResolver = __decorate([
    (0, graphql_1.Resolver)('Step'),
    __metadata("design:paramtypes", [step_service_1.StepService])
], StepResolver);
exports.StepResolver = StepResolver;
//# sourceMappingURL=step.resolver.js.map