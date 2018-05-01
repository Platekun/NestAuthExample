import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from 'typeorm';

@Entity()
export class LoginRecord {
  @PrimaryGeneratedColumn() id: number;

  @Column() userId: number;

  @Column() timestamp: string;
}
