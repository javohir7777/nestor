import { Injectable } from '@nestjs/common';

@Injectable()
export class NestorBatchService {
	getHello(): string {
		return 'Welcome to Nestor BATCH Server!';
	}
}
