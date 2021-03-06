/* eslint-disable new-cap */
import * as express from 'express';
import {alimentModel} from '../../models/aliments/AlimentsSchema';

export const deleteRouterAliments = express.Router();

/**
 * Router delete de aliment
 */
deleteRouterAliments.delete('/aliments', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  try {
    const aliment =
      await alimentModel.findOneAndDelete({name: req.query.name.toString()});

    if (!aliment) {
      return res.status(404).send();
    }

    return res.send(aliment);
  } catch (error) {
    return res.status(400).send();
  }
});
