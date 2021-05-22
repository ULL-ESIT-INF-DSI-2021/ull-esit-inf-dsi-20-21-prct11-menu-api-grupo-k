/* eslint-disable new-cap */
/* eslint-disable max-len */
import * as express from 'express';
import {alimentModel} from '../../models/aliments/AlimentsSchema';

export const patchRouterAliments = express.Router();

patchRouterAliments.patch('/aliments', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  const allowedUpdates = ['name', 'protein', 'fats', 'carbohydrates', 'calories', 'starch', 'sugars', 'fiber', 'water', 'price', 'city', 'locality', 'aliment_group'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const aliment =
    await alimentModel.findOneAndUpdate({name: req.body.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!aliment) {
      return res.status(404).send();
    }

    return res.send(aliment);
  } catch (error) {
    return res.status(400).send(error);
  }
});
