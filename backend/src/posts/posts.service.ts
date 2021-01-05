import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PostsEntity } from './entity/posts.entity';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostType } from './types/post.type';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postRepository: Repository<PostsEntity>,
  ) {}

  public getPost(postId: number): Observable<PostType> {
    return from(this.postRepository.findOne({where: {id: postId}, relations: ['user']})).pipe(
        map((post: PostsEntity) => {
          if (!post) {
            throw new HttpException(
                { statusCode: HttpStatus.NOT_FOUND, error: 'Post is not found' },
                HttpStatus.BAD_REQUEST,
            );
          }
          return post;
        }),
        map(({id, title, body, user}: PostsEntity) => ({userId: user.id, id, title, body})),
    );
  }


  public getPosts(): Observable<PostType[]> {
    return from(this.postRepository.find({ relations: ['user']})).pipe(
        map((posts: PostsEntity[]) => posts.map(({id, title, body, user}: PostsEntity) => ({ userId: user.id, id, title, body }))),
    );
  }

}
