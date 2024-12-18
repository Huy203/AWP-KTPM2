import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// import { ThrowFirstErrorValidationPipe } from 'libs/utils/pipes';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    },
  });
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  // app.useGlobalPipes(ThrowFirstErrorValidationPipe);

  const config = new DocumentBuilder()
    .setTitle('21127297-IA03-BE')
    .setDescription('The backend API for the 21127297-IA03 project')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Main application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
