
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ErrorModule } from './error/error.module';

@Module({
  imports: [UserModule, ErrorModule],
})
export class AppModule {}
