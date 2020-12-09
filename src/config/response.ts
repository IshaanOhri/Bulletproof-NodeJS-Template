/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:38:58
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:20:39
 * @Description: Contain all codes and messages for responses
 */

const status = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500
};

const message = {
  homeRoute: 'Hello World. Welcome to the Bulletproof NodeJS Template!',
  healthRoute: 'Node.js backend running successfully!',
  notFound: 'The requested route does not exist.',
  serverError: 'An internal server error occurred. Please try again.'
};

export { status, message };
