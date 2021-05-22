/* eslint-disable new-cap */
import * as express from 'express';
import {plateModel} from '../../models/plates/PlatesSchema';

export const deleteRouterPlates = express.Router();

deleteRouterPlates.delete('/plates', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  try {
    const plate =
      await plateModel.findOneAndDelete({name: req.body.name.toString()});

    if (!plate) {
      return res.status(404).send();
    }

    return res.send(plate);
  } catch (error) {
    return res.status(400).send();
  }
});
