/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:38:51
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-11-29 01:38:51
 * @Description: Contains all miscellaneous routes
 */

import { Router } from 'express';
import { home } from '../controllers/misc';

const miscRouter: Router = Router();

// @desc	Home Route
// @route	GET /
miscRouter.get('/', home);

export default miscRouter;
