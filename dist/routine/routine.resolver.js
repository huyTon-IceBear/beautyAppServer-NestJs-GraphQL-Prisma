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
exports.RoutineResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../types/graphql");
const routine_service_1 = require("./routine.service");
let RoutineResolver = class RoutineResolver {
    constructor(routineService) {
        this.routineService = routineService;
    }
    create(createRoutineInput) {
        return this.routineService.create(createRoutineInput);
    }
    findAll() {
        return this.routineService.findAll();
    }
    findOne(id) {
        return this.routineService.findOne(id);
    }
    remove(id) {
        return this.routineService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createRoutine'),
    __param(0, (0, graphql_1.Args)('createRoutineInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.CreateRoutineInput]),
    __metadata("design:returntype", void 0)
], RoutineResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('routine'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutineResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('routine'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoutineResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('removeRoutine'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoutineResolver.prototype, "remove", null);
RoutineResolver = __decorate([
    (0, graphql_1.Resolver)('Routine'),
    __metadata("design:paramtypes", [routine_service_1.RoutineService])
], RoutineResolver);
exports.RoutineResolver = RoutineResolver;
//# sourceMappingURL=routine.resolver.js.map