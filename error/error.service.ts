
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ErrorService {
  private readonly logger = new Logger(ErrorService.name);

  logError(message: string, stack?: string) {
    this.logger.error(message, stack);
  }

  handleKnownError(errorMessage: string) {
    this.logger.warn(`Оброблена відома помилка: ${errorMessage}`);
  }
}
