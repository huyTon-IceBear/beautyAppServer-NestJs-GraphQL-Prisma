import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBioFactorInput, UpdateBioFactorInput } from 'src/types/graphql';

@Injectable()
export class BioFactorService {
  constructor(private schema: PrismaService) {}
  create({ type, name, description, profileId }: CreateBioFactorInput) {
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

  findOne(id: number) {
    return this.schema.bioFactor.findUnique({ where: { id } });
  }

  update(id: number, { type, name, description }: UpdateBioFactorInput) {
    return this.schema.bioFactor.update({
      where: { id },
      data: {
        type,
        name,
        description,
      },
    });
  }

  remove(id: number) {
    return this.schema.bioFactor.delete({ where: { id } });
  }
}
