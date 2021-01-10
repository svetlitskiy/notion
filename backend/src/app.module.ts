import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      logging: false,
      ssl: false,
    }),
      PostsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
