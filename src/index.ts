/* eslint-disable import/first */
require('newrelic');

import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import logger from './logger/config';
import { code, message } from './config/messages';

const app = express();
const PORT: number = Number(process.env.PORT);
const HOST: string = String(process.env.HOST);

app.use(cors());
app.use(express.json());

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

app.use('/', (req: Request, res: Response) => {
	res.send({
		success: true,
		code: code.homeRoute,
		message: message.homeRoute
	});
});

app.listen(PORT, HOST, () => {
	logger.info(`NodeJS server listening on ${HOST}:${PORT}`);
});
