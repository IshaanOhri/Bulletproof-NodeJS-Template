/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:35:54
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-11-29 01:37:19
 * @Description: Contains configuration for log4js logger
 */

import { configure, getLogger } from 'log4js';
import path from 'path';

configure({
  appenders: {
    fileAppender: {
      type: 'file',
      filename: path.join(__dirname, './logs.log')
    },
    console: {
      type: 'console'
    }
  },
  categories: {
    default: {
      appenders: ['fileAppender', 'console'],
      level: 'info'
    }
  }
});

const logger = getLogger();

export default logger;
