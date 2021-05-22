/* eslint-disable new-cap */
import * as express from 'express';
import {alimentModel} from '../../models/aliments/AlimentsSchema';

export const getRouterAliments = express.Router();

getRouterAliments.get('/aliments', async (req, res) => {
  const filter = req.body.name?{name: req.body.name.toString()}:{};

  try {
    const aliment = await alimentModel.find(filter);

    if (aliment.length !== 0) {
      return res.send(aliment);
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouterAliments.get('/aliments/:id', async (req, res) => {
  try {
    const aliment = await alimentModel.findById(req.params.id);

    if (!aliment) {
      return res.status(404).send();
    }

    return res.send(aliment);
  } catch (error) {
    return res.status(500).send();
  }
});
