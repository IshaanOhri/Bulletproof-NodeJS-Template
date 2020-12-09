/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:39:38
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:17:48
 * @Description: The file is the driver file. It connects all routers and starts the application server
 */

import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import logger from './logger/config';
import miscRouter from './api/routes/misc';

// Initialize app variable
const app: Application = express();

// Initialize all environment variables
const PORT: number = Number(process.env.PORT);
const HOST: string = String(process.env.HOST);

// CORS
app.use(cors());

// Body parser
app.use(express.json());

// Morgan configuration for development environment
if (process.env.NODE_ENV === 'development') {
  app.use(
    morgan((tokens, req: Request, res: Response) => {
      logger.info(
        `Method: ${tokens.method(req, res)} URL: ${tokens.url(req, res)} Status: ${tokens.status(req, res)} Resp Time: ${tokens['response-time'](
          req,
          res
        )} ms`
      );
      return null;
    })
  );
}

// Import routers
app.use('/api/v1', router);

// Not found handler
app.use(notFound);

// All response handlers
app.use(responseHandler);

app.listen(PORT, HOST, () => {
  logger.info(`NodeJS server listening on http://${HOST}:${PORT}`);
});
