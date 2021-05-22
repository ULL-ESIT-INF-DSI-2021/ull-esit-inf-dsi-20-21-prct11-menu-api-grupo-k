/* eslint-disable new-cap */
import * as express from 'express';
import {plateModel} from '../../models/plates/PlatesSchema';

export const getRouterPlates = express.Router();

getRouterPlates.get('/plates', async (req, res) => {
  const filter = req.query.name?{name: req.query.name.toString()}:{};

  try {
    const plate = await plateModel.find(filter);

    if (plate.length !== 0) {
      return res.send(plate);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});
