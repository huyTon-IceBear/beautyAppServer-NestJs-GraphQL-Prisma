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
exports.BioFactorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const bio_factor_service_1 = require("./bio-factor.service");
const graphql_2 = require("../types/graphql");
let BioFactorResolver = class BioFactorResolver {
    constructor(bioFactorService) {
        this.bioFactorService = bioFactorService;
    }
    create(createBioFactorInput) {
        return this.bioFactorService.create(createBioFactorInput);
    }
    findAll() {
        return this.bioFactorService.findAll();
    }
    findOne(id) {
        return this.bioFactorService.findOne(id);
    }
    update(updateBioFactorInput) {
        return this.bioFactorService.update(updateBioFactorInput.id, updateBioFactorInput);
    }
    remove(id) {
        return this.bioFactorService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createBioFactor'),
    __param(0, (0, graphql_1.Args)('createBioFactorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.CreateBioFactorInput]),
    __metadata("design:returntype", void 0)
], BioFactorResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('bioFactors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BioFactorResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('bioFactor'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BioFactorResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateBioFactor'),
    __param(0, (0, graphql_1.Args)('updateBioFactorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.UpdateBioFactorInput]),
    __metadata("design:returntype", void 0)
], BioFactorResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeBioFactor'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BioFactorResolver.prototype, "remove", null);
BioFactorResolver = __decorate([
    (0, graphql_1.Resolver)('BioFactor'),
    __metadata("design:paramtypes", [bio_factor_service_1.BioFactorService])
], BioFactorResolver);
exports.BioFactorResolver = BioFactorResolver;
//# sourceMappingURL=bio-factor.resolver.js.map