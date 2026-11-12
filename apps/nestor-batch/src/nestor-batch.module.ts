import { Module } from '@nestjs/common';
import { NestorBatchController } from './nestor-batch.controller';
import { NestorBatchService } from './nestor-batch.service';

@Module({
  imports: [],
  controllers: [NestorBatchController],
  providers: [NestorBatchService],
})
export class NestorBatchModule {}
