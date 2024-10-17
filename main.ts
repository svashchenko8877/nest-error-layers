import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './user/filters/all-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Глобальний фільтр виключень
  app.useGlobalFilters(new AllExceptionsFilter());

  // Глобальна валідація
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
