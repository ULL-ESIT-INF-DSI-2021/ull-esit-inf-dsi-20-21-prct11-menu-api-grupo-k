import * as express from 'express';
import './db/mongoose';
import {postRouterAliments} from './routers/aliments/post';
import {postRouterPlates} from './routers/plates/post';
import {postRouterMenu} from './routers/menu/post';

const app = express();
app.use(express.json());
app.use(postRouterAliments);
app.use(postRouterPlates);
app.use(postRouterMenu);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
