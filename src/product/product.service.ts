import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductInput, UpdateProductInput } from 'src/types/graphql';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  create({ name, description, price, stepId }: CreateProductInput) {
    return this.prisma.product.create({
      data: {
        name,
        description,
        price,
        stepId,
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  update(id: number, { name, description, price }: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id },
      data: { name, description, price },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
