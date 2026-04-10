import { createApp } from './app.js';
import { sequelize } from './models/index.js';

const port = Number(process.env.PORT ?? 3000);

async function main() {
  await sequelize.authenticate();

  const app = createApp();
  app.listen(port, () => {
    console.log(`API escuchando en http://127.0.0.1:${port}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
