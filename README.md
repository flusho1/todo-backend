# TODO-List Backend

Este es el backend de la aplicación To-Do List, desarrollado con **Nest.js** y conectado a una base de datos **PostgreSQL**.

### 🚀 Requisitos para Empezar

Para ejecutar el backend, necesitas tener instalados los siguientes programas:

-   **Node.js** (versión 18 o superior)
-   **npm** (viene con Node.js)
-   **PostgreSQL** (versión 12 o superior)

### 🛠️ Configuración y Ejecución

Sigue estos pasos para configurar y levantar el backend en tu máquina local.

**1. Clonar el Repositorio**
```bash
git clone [https://github.com/flusho1/todo-backend.git]
cd todo-backend
```
**2. Instalar Dependencias**
```bash
npm install
```
**3. Configurar la Base de Datos**
- Crea una base de datos en PostgreSQL. Por ejemplo: createdb -U postgres todolist_db.
- Abre src/app.module.ts y actualiza las credenciales de la base de datos con tu usuario, contraseña y el nombre de la base de datos que creaste.

**4. Iniciar el Servidor**
```bash
npm run start:dev
```
El servidor estará disponible en http://localhost:3000.


### 📍 Endpoints de la API
La API cuenta con los siguientes endpoints:

GET /tasks: Obtiene todas las tareas.

POST /tasks: Crea una nueva tarea.

PUT /tasks/:id: Actualiza una tarea.

DELETE /tasks/:id: Elimina una tarea.

