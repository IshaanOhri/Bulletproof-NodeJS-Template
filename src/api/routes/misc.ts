/*
	Date Created: 25 November 2020
	Last Change: 27 November 2020
	Author: Ishaan Ohri
	Description: Contains all miscellaneous routes
*/

import { Router } from 'express';
import { home } from '../controllers/misc';

const miscRouter: Router = Router();

// @desc	Home Route
// @route	GET /
miscRouter.get('/', home);

export default miscRouter;
