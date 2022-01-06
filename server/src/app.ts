import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { errors as celebrateErrors } from 'celebrate';
import routes from './routes';
import errorsHandler from './middlewares/errorsHandler';

const app = express();

app.use(helmet());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json({ limit: '16mb' }));
app.use('/', routes);
app.use(celebrateErrors());
app.use(errorsHandler);

export default app;
