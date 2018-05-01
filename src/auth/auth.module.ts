import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService, LoginAuditService } from './services';
import { LoginRecord } from './entities';
import { UsersModule } from 'users';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([LoginRecord])],
  controllers: [AuthController],
  providers: [AuthService, LoginAuditService],
})
export class AuthModule {}
