/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:30:00
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:30:26
 * @Description: Contains all handlers like try/catch, not found and all response handlers
 */
import { Request, Response, NextFunction } from 'express';
import { status, message } from '../config';
import { HttpError, HttpErrorHandler, HttpResponse, HttpResponseHandler } from '../handlers';
import logger from '../log/config';

// try-catch handler
const catchAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

// No route found
const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(new HttpError(status.notFound, message.notFound));
};

// All response handlers
const responseHandler = (response: HttpError | HttpResponse, req: Request, res: Response, next: NextFunction) => {
  if (response instanceof HttpResponse) {
    HttpResponseHandler(response, res);
    return;
  }

  if (!(response instanceof HttpError)) {
    logger.error(response);
    // eslint-disable-next-line no-param-reassign
    response = new HttpError(status.serverError, message.serverError);
  }
  HttpErrorHandler(response, res);
};

export { catchAsync, notFound, responseHandler };
