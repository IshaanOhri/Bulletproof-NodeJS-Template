/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:15:47
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:39:32
 * @Description: Export all environment variables
 */
export const NODE_ENV: string = String(process.env.NODE_ENV);
export const PORT: number = Number(process.env.PORT);
export const HOST: string = String(process.env.HOST);
