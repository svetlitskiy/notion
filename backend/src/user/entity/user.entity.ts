import { Exclude } from 'class-transformer';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    nullable: false,
    length: 100,
  })
  @Index('user_email_index', { unique: true, where: 'soft_deleted is false' })
  public email: string;

  @Column({
    nullable: true,
    length: 100,
  })
  public name: string;

  @Column({
    nullable: true,
    length: 100,
  })
  public surname: string;

  @Exclude()
  @Column({
    nullable: false,
    length: 128,
    select: false,
  })
  public password: string;

  @Column({
    name: 'soft_deleted',
    default: false,
    nullable: false,
    select: false,
  })
  public deleted: boolean;
}
