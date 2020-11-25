/*
	Date: 25 November 2020
	Author: Ishaan Ohri
	Description: Defines functions for all miscellaneous routes
*/

import { Request, Response } from 'express';
import moment from 'moment';
import { code, message } from '../../config/messages';

const home = async (req: Request, res: Response) => {
	res.send({
		success: true,
		code: code.homeRoute,
		message: message.homeRoute,
		timestamp: moment().format()
	});
};

export { home };
