import { IsString, MaxLength } from 'class-validator'; // Importa MaxLength
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'El título de la tarea',
    example: 'Aprender NestJS y TypeORM'
  })
  @IsString()
  @MaxLength(100) // Límite de 100 caracteres para el título
  title: string;

  @ApiProperty({
    description: 'La descripción de la tarea',
    example: 'Documentar la API de la lista de tareas.'
  })
  @IsString()
  @MaxLength(500) // Límite de 500 caracteres para la descripción
  description: string;
}