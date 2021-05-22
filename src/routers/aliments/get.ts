/* eslint-disable new-cap */
import * as express from 'express';
import {alimentModel} from '../../models/aliments/AlimentsSchema';

export const getRouterAliments = express.Router();

getRouterAliments.get('/aliments', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  try {
    const aliment = await alimentModel.find({name: req.body.name.toString()});

    if (aliment.length !== 0) {
      return res.send(aliment);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});
