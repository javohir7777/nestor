import { NestFactory } from '@nestjs/core';
import { NestorBatchModule } from './nestor-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(NestorBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
void bootstrap();
