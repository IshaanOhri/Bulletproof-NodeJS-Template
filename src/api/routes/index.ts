/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:57:43
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 15:01:42
 * @Description: Indexing for all routers
 */
import { Router } from 'express';
import miscRouter from './misc';

const router: Router = Router();

router.use(miscRouter);

export { router };
