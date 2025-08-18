import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Tareas')
    .setDescription('La API del CRUD de tareas para el test técnico.')
    .setVersion('1.0')
    .addTag('tasks')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' es la ruta para acceder a Swagger

  app.enableCors(); // Habilita CORS para el frontend
  await app.listen(3000);
}
bootstrap();