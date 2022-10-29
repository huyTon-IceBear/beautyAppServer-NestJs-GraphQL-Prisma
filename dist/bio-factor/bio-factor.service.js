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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BioFactorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BioFactorService = class BioFactorService {
    constructor(schema) {
        this.schema = schema;
    }
    create({ type, name, description, profileId }) {
        return this.schema.bioFactor.create({
            data: {
                type,
                name,
                description,
                profileId,
            },
        });
    }
    findAll() {
        return this.schema.bioFactor.findMany();
    }
    findOne(id) {
        return this.schema.bioFactor.findUnique({ where: { id } });
    }
    update(id, { type, name, description }) {
        return this.schema.bioFactor.update({
            where: { id },
            data: {
                type,
                name,
                description,
            },
        });
    }
    remove(id) {
        return this.schema.bioFactor.delete({ where: { id } });
    }
};
BioFactorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BioFactorService);
exports.BioFactorService = BioFactorService;
//# sourceMappingURL=bio-factor.service.js.map