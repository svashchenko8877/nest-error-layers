import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { RolesGuard } from '../guards/roles.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Отримання користувача за ID
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  // Реєстрація нового користувача
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerUser(
      createUserDto.email,
      createUserDto.password,
    );
  }

  // Захищений маршрут (приклад обробки помилок авторизації)
  @Get('protected/resource')
  @UseGuards(RolesGuard)
  getProtectedResource() {
    return { data: 'Це захищений ресурс' };
  }
}
