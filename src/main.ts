import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as process from 'node:process';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Top api')
    .setDescription('The Top API description')
    .setVersion('1.0')
    .addTag('Top')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port, () => {
    console.log(`Server start on ${port}`);
  });
}

bootstrap();
