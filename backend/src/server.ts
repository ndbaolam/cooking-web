import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mainRoute } from './api/routes/index.route';

const app: Express = express();

const PORT: string | number = process.env.PORT || 3080;

express.json();
app.use(cors());
dotenv.config();

mainRoute(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})