import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../database/base.entity';
import { Role } from '../auth/roles.enum';

@Entity('users')
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.VIEWER,
  })
  role: Role;

  @Column({ default: true })
  isActive: boolean;
}
