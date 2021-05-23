/* eslint-disable new-cap */
/* eslint-disable max-len */
import * as express from 'express';
import {plateModel} from '../../models/plates/PlatesSchema';

export const patchRouterPlates = express.Router();

/**
 * Router MODIFY de plate
 */
patchRouterPlates.patch('/plates', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  const allowedUpdates = ['name', 'protein', 'fats', 'carbohydrates', 'calories', 'starch', 'sugars', 'fiber', 'water', 'price', 'predominantAlimentGroup', 'ingredients', 'category'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const plate =
    await plateModel.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!plate) {
      return res.status(404).send();
    }

    return res.send(plate);
  } catch (error) {
    return res.status(400).send(error);
  }
});
