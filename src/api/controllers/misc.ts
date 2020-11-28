/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:38:35
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-11-29 01:38:35
 * @Description: Defines functions for all miscellaneous routes
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
