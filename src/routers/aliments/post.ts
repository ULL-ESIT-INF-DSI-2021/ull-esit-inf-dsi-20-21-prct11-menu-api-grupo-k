/* eslint-disable new-cap */
import * as express from 'express';
import {alimentModel} from '../../models/aliments/AlimentsSchema';

export const postRouterAliments = express.Router();

/**
 * Router CREATE de aliment
 */
postRouterAliments.post('/aliments', (req, res) => {
  const aliment = new alimentModel(req.body);

  aliment.save().then((aliment) => {
    res.status(201).send(aliment);
  }).catch((error) => {
    res.status(400).send(error);
  });
});
