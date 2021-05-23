/* eslint-disable new-cap */
import * as express from 'express';
import {menuModel} from '../../models/menu/MenusSchema';

export const postRouterMenu = express.Router();

/**
 * Router CREATE de aliment
 */
postRouterMenu.post('/menus', (req, res) => {
  const menu = new menuModel(req.body);

  menu.save().then((menu) => {
    res.status(201).send(menu);
  }).catch((error) => {
    res.status(400).send(error);
  });
});
