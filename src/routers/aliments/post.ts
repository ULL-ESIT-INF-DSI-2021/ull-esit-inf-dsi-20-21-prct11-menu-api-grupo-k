/* eslint-disable new-cap */
import * as express from 'express';
import {alimentModel} from '../../models/aliments/AlimentsSchema';

export const postRouterAliments = express.Router();

postRouterAliments.post('/aliments', (req, res) => {
  const user = new alimentModel(req.body);

  user.save().then((user) => {
    res.status(201).send(user);
  }).catch((error) => {
    res.status(400).send(error);
  });
});
