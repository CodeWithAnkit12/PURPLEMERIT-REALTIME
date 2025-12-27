import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import appConfig from './config/app.config';
import { databaseConfig } from './config/database.config';

import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    // =========================
    // Global Config
    // =========================
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),

    // =========================
    // Database (PostgreSQL)
    // =========================
    TypeOrmModule.forRoot(databaseConfig()),

    // =========================
    // Redis (JWT Blacklist, Logout)
    // =========================

    // =========================
    // Feature Modules
    // =========================
    UsersModule,
    AuthModule,
  ],

  // =========================
  // Root Controller
  // =========================
  controllers: [AppController],

  providers: [],
})
export class AppModule {}
