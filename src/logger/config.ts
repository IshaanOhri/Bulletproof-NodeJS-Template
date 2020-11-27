/*
	Date Created: 25 November 2020
	Last Change: 27 November 2020
	Author: Ishaan Ohri
	Description: Contains the configuration for log4js logger
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
