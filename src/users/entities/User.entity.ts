import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { AccountStates } from '../account-states';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ default: AccountStates.ACTIVE })
  accountState: number;
}
