/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:23:31
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:28:41
 * @Description: Contains the HTTP Error Template and HTTP Error Handler
 */
import { Response } from 'express';
import moment from 'moment';
import { MetadataError } from '../interfaces';

/*
  HTTP Error Template
 */

class HttpError extends Error {
  metadata: MetadataError;

  constructor(status: number, error: any) {
    super();
    this.metadata = {
      success: false,
      status,
      error,
      timestamp: moment().format()
    };
  }
}

/*
  HTTP Error Handler
*/

const HttpErrorHandler = (httpError: HttpError, res: Response) => {
  const { metadata } = httpError;
  res.status(metadata.status).send({ metadata });
};

export { HttpError, HttpErrorHandler };
