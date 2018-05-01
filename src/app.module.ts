import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users';
import { AuthModule } from './auth';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule],
})
export class AppModule {}
