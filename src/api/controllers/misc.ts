/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:38:35
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:20:53
 * @Description: Defines functions for all miscellaneous routes
 */

import { NextFunction, Request, Response } from 'express';
import { status, message } from '../../config';
import { HttpResponse } from '../../handlers';
import { catchAsync } from '../../middleware';
// import { catchAsync } from '../../middleware/handlers';

// Home route
const home = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  next(new HttpResponse(status.ok, message.homeRoute));
});

// Health route
const health = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  next(new HttpResponse(status.ok, message.healthRoute));
});

export { home, health };
