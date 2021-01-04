import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { PostsService } from './posts.service';
import { GetPostDto } from './dto/get-post.dto';
import { Observable } from 'rxjs';
import { PostInterface } from './interfaces/post.interface';


@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('posts/:postId')
  public getPost(
    @Param() param: GetPostDto,
  ): Observable<PostInterface> {
    return this.postsService.getPost(param.postId);
  }


  @Get('posts')
  public getPosts(): Observable<PostInterface[]> {
    return this.postsService.getPosts();
  }


}
