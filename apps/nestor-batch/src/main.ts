import { NestFactory } from '@nestjs/core';
import { NestorBatchModule } from './nestor-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(NestorBatchModule);
  await app.listen(process.env.port ?? 3000);
}
void bootstrap();
