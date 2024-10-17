import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  private users: User[] = []; // Імітуємо базу даних
  private idCounter = 1;

  findById(id: number): User | null {
    return this.users.find((user) => user.id === id) || null;
  }

  findByEmail(email: string): User | null {
    return this.users.find((user) => user.email === email) || null;
  }

  save(user: User): User {
    user.id = this.idCounter++;
    this.users.push(user);
    return user;
  }
}
