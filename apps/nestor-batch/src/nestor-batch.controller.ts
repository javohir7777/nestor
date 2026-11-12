import { Controller, Get } from '@nestjs/common';
import { NestorBatchService } from './nestor-batch.service';

@Controller()
export class NestorBatchController {
  constructor(private readonly nestorBatchService: NestorBatchService) {}

  @Get()
  getHello(): string {
    return this.nestorBatchService.getHello();
  }
}
