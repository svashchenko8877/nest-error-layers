
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserNotFoundException } from '../error/exceptions/user-not-found.exception';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.findById(id);
    if (!user) {
      throw new UserNotFoundException(id);
    }
    return user;
  }
}
