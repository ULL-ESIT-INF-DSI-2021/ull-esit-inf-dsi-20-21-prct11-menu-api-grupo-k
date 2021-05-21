import * as express from 'express';
import './db/mongoose';
import {postRouter} from './add';

const app = express();
app.use(express.json());
app.use(postRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
