import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    // У реальному додатку ви будете отримувати користувача з запиту після автентифікації
    const user = request.user;

    // Для прикладу додамо користувача вручну
    request.user = { roles: ['user'] };

    if (!request.user.roles.includes('admin')) {
      throw new ForbiddenException('Доступ заборонено');
    }

    return true;
  }
}
