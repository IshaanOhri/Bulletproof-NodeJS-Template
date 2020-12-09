/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:25:19
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:28:09
 * @Description: Contains the HTTP Response Template and HTTP Response Handler
 */
import moment from 'moment';
import { Response } from 'express';
import { Metadata } from '../interfaces';

/*
  HTTP Response Template
*/

class HttpResponse {
  data: any;

  metadata: Metadata;

  constructor(status: number, data: any) {
    this.data = data;
    this.metadata = {
      success: true,
      status,
      timestamp: moment().format()
    };
  }
}

/*
  HTTP Response Handler
*/

const HttpResponseHandler = (httpResponse: HttpResponse, res: Response) => {
  const { data, metadata } = httpResponse;
  if (data == null) {
    res.status(metadata.status).send({ metadata });
  } else {
    res.status(metadata.status).send({ data, metadata });
  }
};

export { HttpResponse, HttpResponseHandler };
