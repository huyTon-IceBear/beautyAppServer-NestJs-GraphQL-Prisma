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
exports.ProfileResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../types/graphql");
const profile_service_1 = require("./profile.service");
let ProfileResolver = class ProfileResolver {
    constructor(profileService) {
        this.profileService = profileService;
    }
    create(createProfileInput) {
        return this.profileService.create(createProfileInput);
    }
    findAll() {
        return this.profileService.findAll();
    }
    findOne(id) {
        return this.profileService.findOne(id);
    }
    update(updateProfileInput) {
        return this.profileService.update(updateProfileInput.id);
    }
    remove(id) {
        return this.profileService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createProfile'),
    __param(0, (0, graphql_1.Args)('createProfileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.CreateProfileInput]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('profile'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateProfile'),
    __param(0, (0, graphql_1.Args)('updateProfileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.UpdateProfileInput]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeProfile'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "remove", null);
ProfileResolver = __decorate([
    (0, graphql_1.Resolver)('Profile'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileResolver);
exports.ProfileResolver = ProfileResolver;
//# sourceMappingURL=profile.resolver.js.map