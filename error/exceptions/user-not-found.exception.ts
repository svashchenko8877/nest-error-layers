
import { BaseException } from './base.exception';
import { HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends BaseException {
  constructor(userId: number) {
    super(`Користувач з ID ${userId} не знайдений`, HttpStatus.NOT_FOUND);
  }
}
