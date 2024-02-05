import { Sequelize } from 'sequelize';
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'mysql',
    pool: {
      max: 10000500,
      min: 0,
      acquire: 1000000,
      idle: 2000000,
    },
  },
);
async function connectDB() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully. 👌');
  } catch (E) {
    return e;
  }
}

export { db, connectDB };

