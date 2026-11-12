import { Test, TestingModule } from '@nestjs/testing';
import { NestorBatchController } from './nestor-batch.controller';
import { NestorBatchService } from './nestor-batch.service';

describe('NestorBatchController', () => {
  let nestorBatchController: NestorBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestorBatchController],
      providers: [NestorBatchService],
    }).compile();

    nestorBatchController = app.get<NestorBatchController>(NestorBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestorBatchController.getHello()).toBe('Hello World!');
    });
  });
});
