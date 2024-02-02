import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import storeBuilder from 'connect-session-sequelize';
import cookieParser from 'cookie-parser';
import { serverError } from './middlewares/handleErrors.js';
import helmet from 'helmet';
import { connectDB, db } from './db/conn.js';
const app = express();
const SequelizeStore = storeBuilder(session.Store);
app.use(express.json({ limit: '200mb' }));
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(
  session({
    name: 'session',
    store: new SequelizeStore({ db }),
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    },
  }),
);
const main = async () => {
  const { PORT } = process.env;
  await connectDB();
  await app.listen(PORT);
  console.log('server is running on port ✔ localhost:' + PORT);
};
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
app.use(serverError);
