import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { getEnvVar } from './utils/getEnvVar.js';

console.log(process.env.PORT);
console.log(process.env.DATA);

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
  });

  app.get('/contacts', (req, res) => {
    res.send('<h1>Contacts Page</h1>');
  });

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} not ffound`,
    });
  });

  app.use((error, req, res, next) => {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  });

  const PORT = Number(getEnvVar('PORT', 3000));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
