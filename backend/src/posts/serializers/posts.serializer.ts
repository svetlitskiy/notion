import { PostsEntity } from '../entity/posts.entity';
import { Transform } from 'class-transformer';
import { UserEntity } from '../../user/entity/user.entity';

export class PostsSerializer extends PostsEntity {
  @Transform(user => user.id)
  public user: UserEntity;

}
