import * as express from 'express';
import './db/mongoose';
// import {addRouter} from './AddUser';

const app = express();
// app.use(addRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
