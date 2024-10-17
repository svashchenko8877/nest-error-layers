
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { EmailAlreadyUsedException } from '../error/exceptions/email-already-used.exception';

@Injectable()
export class UserService {
  private users: User[] = [];

  findById(id: number): User | null {
    return this.users.find(user => user.id === id) || null;
  }

  registerUser(email: string, password: string): User {
    const existingUser = this.users.find(user => user.email === email);
    if (existingUser) {
      throw new EmailAlreadyUsedException(email);
    }

    const newUser = { id: this.users.length + 1, email, password };
    this.users.push(newUser);
    return newUser;
  }
}
