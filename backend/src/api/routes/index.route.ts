import { Express } from 'express';
import * as controller from '../controllers/index.control';

export const mainRoute = (app: Express): void => {
  const path: string = '/api';

  app.use(path, controller.index);
}