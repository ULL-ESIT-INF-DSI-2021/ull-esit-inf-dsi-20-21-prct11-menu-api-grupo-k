import * as express from 'express';
import './db/mongoose';
import {postRouterAliments} from './routers/aliments/post';
import {getRouterAliments} from './routers/aliments/get';
import {deleteRouterAliments} from './routers/aliments/delete';
import {postRouterPlates} from './routers/plates/post';
import {postRouterMenu} from './routers/menu/post';

const app = express();
app.use(express.json());
// Aliments
app.use(postRouterAliments);
app.use(getRouterAliments);
app.use(deleteRouterAliments);

app.use(postRouterPlates);
app.use(postRouterMenu);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
