import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PostType } from '../dist/types/post.type';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/posts (GET)', () => {
    return request(app.getHttpServer())
        .get('/posts')
        .expect(200)
        .expect(res => {
          const resp = res.body as PostType[];
          expect(resp.length).toBe(10);
          expect(resp[0].userId).toBe(1);
          expect(resp[0].id).toBe(1);
          expect(resp[0].body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
          expect(resp[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        })
  });

  it('/post/1 (GET)', () => {
    return request(app.getHttpServer())
        .get('/posts/1')
        .expect(200)
        .expect(res => {
          const resp = res.body as PostType;
          expect(resp.userId).toBe(1);
          expect(resp.id).toBe(1);
          expect(resp.body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
          expect(resp.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        })
  });

  afterEach(async () => {
    await app.close();
  });
});
