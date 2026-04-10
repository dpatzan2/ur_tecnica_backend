# Backend

## Instalación

```bash
npm install
cp .env.example .env
```

Editar `.env` (MySQL y `PORT`; `CORS_ORIGIN` para el frontend, ej. `http://localhost:5173`).

## Base de datos (Sequelize)

Creá la base en MySQL si no existe:

```sql
CREATE DATABASE ur_tecnica CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Migraciones:

```bash
npm run db:migrate
```

## Iniciar

```bash
npm run dev
```

API: `http://127.0.0.1:3000` (o el `PORT` del `.env`).
