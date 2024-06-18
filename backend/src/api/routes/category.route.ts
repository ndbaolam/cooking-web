import { Router } from "express";

import * as controller from '../controllers/category.control';

const route: Router = Router();

route.get('/', controller.index);

const categoryRoutes: Router = route

export default categoryRoutes;