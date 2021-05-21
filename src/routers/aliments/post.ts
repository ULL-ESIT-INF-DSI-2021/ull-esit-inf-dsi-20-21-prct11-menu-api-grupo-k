/* eslint-disable new-cap */
import * as express from 'express';
import {aliment} from '../../models/aliments/AlimentsSchema';
// import {User} from '../../models/UserSchema';

export const postRouterAliments = express.Router();

postRouterAliments.post('/aliments', (req, res) => {
  const user = new aliment(req.body);

  user.save().then((user) => {
    res.status(201).send(user);
  }).catch((error) => {
    res.status(400).send(error);
  });
});
