/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:39:38
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:58:28
 * @Description: The file is the driver file. It connects all routers and starts the application server
 */

import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import logger from './log/config';
import { router } from './api/routes';
import { notFound, responseHandler } from './middleware';
import { HOST, NODE_ENV, PORT } from './config';

// Initialize app variable
const app: Application = express();

// Initialize all environment variables

// CORS
app.use(cors());

// Body parser
app.use(express.json());

// Morgan configuration for development environment
if (NODE_ENV === 'development') {
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
