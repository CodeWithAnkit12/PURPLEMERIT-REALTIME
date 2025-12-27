import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/roles.enum';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {

  // =========================
  // PROFILE (JWT + BLACKLIST)
  // =========================
  @Get('me')
  getProfile() {
    return {
      message: 'Authenticated & active user profile',
    };
  }

  // =========================
  // ADMIN (OWNER ONLY)
  // =========================
  @Get('admin')
  @Roles(Role.OWNER)
  getAdminData() {
    return {
      message: 'Only OWNER can access this route',
    };
  }
}
