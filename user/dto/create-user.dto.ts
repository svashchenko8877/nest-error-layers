import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Невірна електронна адреса' })
  email: string;

  @IsNotEmpty({ message: 'Пароль не повинен бути порожнім' })
  @MinLength(6, { message: 'Пароль повинен містити мінімум 6 символів' })
  password: string;
}
