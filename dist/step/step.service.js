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
exports.StepService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StepService = class StepService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create({ complete, name, description, routineId }) {
        return this.prisma.step.create({
            data: {
                complete,
                name,
                description,
                routineId,
            },
        });
    }
    findAll() {
        return this.prisma.step.findMany();
    }
    findOne(id) {
        return this.prisma.step.findUnique({
            where: { id },
        });
    }
    update(id, { name, description, complete }) {
        return this.prisma.step.update({
            where: { id },
            data: {
                name,
                description,
                complete,
            },
        });
    }
    remove(id) {
        return this.prisma.step.delete({
            where: { id },
        });
    }
};
StepService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StepService);
exports.StepService = StepService;
//# sourceMappingURL=step.service.js.map