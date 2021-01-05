import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { PostsService } from './posts.service';
import { GetPostDto } from './dto/get-post.dto';
import { Observable } from 'rxjs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostType } from './types/post.type';
import { ErrorType } from '../share/error.type';


@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':postId')
  @ApiResponse({ status: 200, description: 'The post has been successfully found.', type: PostType})
  @ApiResponse({ status: 404, description: 'The post is not found.', type: ErrorType})
  public getPost(
    @Param() param: GetPostDto,
  ): Observable<PostType> {
    return this.postsService.getPost(param.postId);
  }


  @Get('')
  @ApiResponse({ status: 200, description: 'List of posts.',  isArray: true, type: PostType })
  public getPosts(): Observable<PostType[]> {
    return this.postsService.getPosts();
  }


}
