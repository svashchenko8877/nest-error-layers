
import { BaseException } from './base.exception';
import { HttpStatus } from '@nestjs/common';

export class EmailAlreadyUsedException extends BaseException {
  constructor(email: string) {
    super(`Email ${email} вже використовується`, HttpStatus.BAD_REQUEST);
  }
}
