/* eslint-disable new-cap */
import * as express from 'express';
import {menuModel} from '../../models/menu/MenusSchema';

export const deleteRouterMenu = express.Router();

deleteRouterMenu.delete('/menus', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  try {
    const menu =
      await menuModel.findOneAndDelete({name: req.body.name.toString()});

    if (!menu) {
      return res.status(404).send();
    }

    return res.send(menu);
  } catch (error) {
    return res.status(400).send();
  }
});
