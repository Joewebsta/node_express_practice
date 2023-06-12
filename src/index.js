import 'dotenv/config';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import routes from './routes';
import models from './models/'
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`),
);