/* eslint-disable new-cap */
import * as express from 'express';
import {plateModel} from '../../models/plates/PlatesSchema';

export const postRouterPlates = express.Router();

postRouterPlates.post('/plates', (req, res) => {
  const plate = new plateModel(req.body);

  plate.save().then((plate) => {
    res.status(201).send(plate);
  }).catch((error) => {
    res.status(400).send(error);
  });
});
