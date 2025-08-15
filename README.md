TODO-List Backend
Este es el backend de la aplicación To-Do List, desarrollado con Nest.js y conectado a una base de datos PostgreSQL.

🚀 Requisitos para Empezar
Antes de iniciar, asegúrate de tener instalados los siguientes programas:

Node.js (versión 18 o superior)

npm (viene con Node.js)

PostgreSQL (versión 12 o superior)

🛠️ Configuración del Proyecto
Sigue estos pasos para configurar y levantar el backend en tu máquina local.

1. Clonar el Repositorio

Bash

git clone https://github.com/tu-usuario/todo-backend.git
cd todo-backend
2. Instalar Dependencias

Bash

npm install
3. Configurar la Base de Datos

Crea una base de datos en PostgreSQL (puedes usar pgAdmin o la terminal). Por ejemplo:

Bash

createdb -U postgres todolist_db
Abre el archivo src/app.module.ts y actualiza las credenciales de la base de datos con tu usuario, contraseña y el nombre de la base de datos que creaste.

4. Iniciar el Servidor

Una vez que la base de datos esté configurada, puedes iniciar el servidor en modo de desarrollo. La opción synchronize: true de TypeORM creará la tabla task automáticamente.

Bash

npm run start:dev
El servidor estará disponible en http://localhost:3000.

📍 Endpoints de la API
La API cuenta con los siguientes endpoints para el manejo de tareas. Puedes probarlos con herramientas como Postman o Insomnia.

GET /tasks: Obtiene todas las tareas.

GET /tasks/:id: Obtiene una tarea por su ID.

POST /tasks: Crea una nueva tarea.

Body: { "title": "...", "description": "..." }

PUT /tasks/:id: Actualiza una tarea por su ID.

Body: { "completed": true }

DELETE /tasks/:id: Elimina una tarea por su ID.

🤝 Conexión con el Frontend
Este backend está diseñado para funcionar con el frontend de la misma aplicación, disponible en este repositorio:
[Enlace a tu repositorio de frontend]

¡Disfruta desarrollando! 😊
