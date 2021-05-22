/* eslint-disable new-cap */
import * as express from 'express';
import {menuModel} from '../../models/menu/MenusSchema';

export const getRouterMenu = express.Router();

getRouterMenu.get('/menus', async (req, res) => {
  const filter = req.query.name?{name: req.query.name.toString()}:{};

  try {
    const menu = await menuModel.find(filter);

    if (menu.length !== 0) {
      return res.send(menu);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});
