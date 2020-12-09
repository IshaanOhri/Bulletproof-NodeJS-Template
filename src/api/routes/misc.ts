/*
 * @Author: Ishaan Ohri
 * @Date: 2020-11-29 01:34:23
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:57:01
 * @Description: Contains all miscellaneous routes
 */

import { Router } from 'express';
import { health, home } from '../controllers';

const miscRouter: Router = Router();

// @desc	Home Route
// @route	GET /
miscRouter.get('/', home);

// @desc	Health Route
// @route	GET /health
miscRouter.get('/health', health);

export default miscRouter;
