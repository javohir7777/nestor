import { Module } from '@nestjs/common';
import { NestorBatchController } from './nestor-batch.controller';
import { NestorBatchService } from './nestor-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot()],
	controllers: [NestorBatchController],
	providers: [NestorBatchService],
})
export class NestorBatchModule {}
