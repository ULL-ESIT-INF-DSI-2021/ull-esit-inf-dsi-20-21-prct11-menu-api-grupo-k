/* eslint-disable max-len */
/* eslint-disable new-cap */

import * as express from 'express';
import {menuModel} from '../../models/menu/MenusSchema';

export const patchRouterMenu = express.Router();

patchRouterMenu.patch('/menus', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  const allowedUpdates = ['name', 'plates', 'price', 'protein', 'fats', 'carbohydrates', 'calories', 'starch', 'sugars', 'fiber', 'water', 'alimentGroupList', 'verify_menu'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const menu =
    await menuModel.findOneAndUpdate({name: req.body.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!menu) {
      return res.status(404).send();
    }

    return res.send(menu);
  } catch (error) {
    return res.status(400).send(error);
  }
});
