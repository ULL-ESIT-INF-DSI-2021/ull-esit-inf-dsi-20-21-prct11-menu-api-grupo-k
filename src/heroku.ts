import * as express from 'express';
import './db/mongoose';
import {postRouterAliments} from './routers/aliments/post';
import {getRouterAliments} from './routers/aliments/get';
import {deleteRouterAliments} from './routers/aliments/delete';
import {patchRouterAliments} from './routers/aliments/patch';
import {postRouterPlates} from './routers/plates/post';
import {getRouterPlates} from './routers/plates/get';
import {deleteRouterPlates} from './routers/plates/delete';
import {patchRouterPlates} from './routers/plates/patch';
import {postRouterMenu} from './routers/menu/post';
import {getRouterMenu} from './routers/menu/get';
import {deleteRouterMenu} from './routers/menu/delete';
import {patchRouterMenu} from './routers/menu/patch';

export const LinkAliments = 'https://grupo-k-p11-menu-app.herokuapp.com/aliments';
export const LinkPlates = 'https://grupo-k-p11-menu-app.herokuapp.com/plates';
export const LinkMenus = 'https://grupo-k-p11-menu-app.herokuapp.com/menus';

const app = express();
app.use(express.json());
// Aliments
app.use(postRouterAliments);
app.use(getRouterAliments);
app.use(deleteRouterAliments);
app.use(patchRouterAliments);
// Plates
app.use(postRouterPlates);
app.use(getRouterPlates);
app.use(deleteRouterPlates);
app.use(patchRouterPlates);
// Menus
app.use(postRouterMenu);
app.use(getRouterMenu);
app.use(deleteRouterMenu);
app.use(patchRouterMenu);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
