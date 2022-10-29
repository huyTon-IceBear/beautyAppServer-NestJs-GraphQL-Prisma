import { Module } from '@nestjs/common';
import { BioFactorService } from './bio-factor.service';
import { BioFactorResolver } from './bio-factor.resolver';

@Module({
  providers: [BioFactorResolver, BioFactorService]
})
export class BioFactorModule {}
