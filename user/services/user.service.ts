import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { EmailAlreadyUsedException } from '../exceptions/email-already-used.exception';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUserById(id: number): User {
    const user = this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`Користувач з ID ${id} не знайдений`);
    }
    return user;
  }

  registerUser(email: string, password: string): User {
    const existingUser = this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new EmailAlreadyUsedException(email);
    }
    const newUser: User = { id: 0, email, password, roles: ['user'] };
    return this.userRepository.save(newUser);
  }
}
