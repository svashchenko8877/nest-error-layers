import { BadRequestException } from '@nestjs/common';

export class EmailAlreadyUsedException extends BadRequestException {
  constructor(email: string) {
    super(`Електронна адреса ${email} вже використовується`);
  }
}
