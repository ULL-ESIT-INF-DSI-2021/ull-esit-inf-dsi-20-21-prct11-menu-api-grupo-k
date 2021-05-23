/* eslint-disable camelcase */
import * as mongoose from 'mongoose';

const mongodb_url = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/menu-app';

/**
 * Conexion a la url de Heroku
 */
mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  // console.log('Connection to MongoDB server established');
}).catch(() => {
  // console.log('Unnable to connect to MongoDB server');
});
