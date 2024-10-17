
import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { AllExceptionsFilter } from './error.filter';

@Module({
  providers: [ErrorService, AllExceptionsFilter],
  exports: [ErrorService],
})
export class ErrorModule {}
