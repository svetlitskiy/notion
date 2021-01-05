import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PostsModule } from './posts/posts.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
      .setTitle('Notion API')
      .setDescription('The notion API description')
      .setVersion(process.env.npm_package_version)
      .addTag('posts')
      .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [PostsModule, AppModule]
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
