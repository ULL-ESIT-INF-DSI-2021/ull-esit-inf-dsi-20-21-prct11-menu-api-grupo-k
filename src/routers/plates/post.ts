/* eslint-disable new-cap */
import * as express from 'express';
import {User} from '../../models/UserSchema';

export const postRouterPlates = express.Router();

postRouterPlates.post('/plates', (req, res) => {
  const user = new User(req.body);

  user.save().then((user) => {
    res.status(201).send(user);
  }).catch((error) => {
    res.status(400).send(error);
  });
});