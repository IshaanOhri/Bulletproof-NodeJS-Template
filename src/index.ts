/*
	Date Created: 25 November 2020
	Last Change: 27 November 2020
	Author: Ishaan Ohri
	Description: The file is the driver file. It connects all routers and starts the application server.
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
                `Method: ${tokens.method(req, res)} URL: ${tokens.url(req, res)} Status: ${tokens.status(req, res)} Resp Time: ${tokens[
                    'response-time'
                ](req, res)} ms`
            );
            return null;
        })
    );
}

// Import routers
app.use(miscRouter);

app.listen(PORT, HOST, () => {
    logger.info(`NodeJS server listening on http://${HOST}:${PORT}`);
});
