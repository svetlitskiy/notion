import { Exclude, Transform } from 'class-transformer';
import {
  Column,
  Entity, JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from '../../user/entity/user.entity';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  public id: number;


  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  public user: UserEntity;

  @Column({
    nullable: false,
    length: 256,
  })
  public title: string;

  @Column({
    nullable: false,
  })
  public body: string;

  // constructor(partial: Partial<PostsEntity>) {
  //   Object.assign(this, partial);
  // }
}
