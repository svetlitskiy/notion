import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { of } from 'rxjs';
import { PostType } from './types/post.type';

describe('PostsController', () => {
  let postsController: PostsController;
  let postsService: PostsService;

  beforeEach(async () => {
    const postsServiceProviderMock = {
      provide: PostsService,
      useValue: {
        getPost: () => jest.fn(),
        getPosts: () => jest.fn(),
      },
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [postsServiceProviderMock],
    }).compile();

    postsService = moduleRef.get(PostsService);
    postsController = moduleRef.get<PostsController>(PostsController);
  });

  describe('getPost', () => {
    it('should return data', async () => {
      const result: PostType = {userId: 1, id: 2, body: 'body text', title: 'title text'};
      jest.spyOn(postsService, 'getPost').mockImplementation(() => of(result));

      expect(await postsController.getPost({postId: 1}).toPromise()).toEqual(result);
    });
  });

  describe('getPosts', () => {
    it('should return data', async () => {
      const result: PostType[] = [{userId: 1, id: 1, body: 'body text 1', title: 'title text 1'}, {userId: 2, id: 2, body: 'body text 2', title: 'title text 2'}];
      jest.spyOn(postsService, 'getPosts').mockImplementation(() => of(result));

      expect(await postsController.getPosts().toPromise()).toEqual(result);
    });
  });
});
