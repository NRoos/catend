import express from 'express';
import { rootHandler } from './handlers';

const app = express();
const port = process.env.PORT || '8001';

app.get('/', rootHandler);

app.listen(port);
