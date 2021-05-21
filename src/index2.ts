/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import {Aliment, AlimentGroup} from './class/aliment/aliment';
import {Category, Plate} from './class/plate/plate';
import {plateModel} from './models/plates/PlatesSchema';
import * as mongoose from 'mongoose';
import './db/mongoose';


const queso_gouda = new Aliment('Queso gouda', 1, 25.5, 20, 0, 331, 0, 0, 0, 49.1, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);
const queso_mozarella = new Aliment('Queso mozarella', 1, 21.1, 20, 0, 353, 0, 0, 0, 49.1, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);

const ingredientes = new Map<Aliment, number>();

const test = new Map<string, number>();
test.set('pollo', 20);
// test.set('arroz', 10);

ingredientes.clear();
ingredientes.set(queso_mozarella, 20);

ingredientes.set(queso_gouda, 10);
const plato_arepitas = new Plate('Arepitas con queso', ingredientes, Category.entree);

console.log(JSON.stringify(test));

console.log(plato_arepitas);

const plate = new plateModel({
  name: 'Arepitas con queso',
  category: '0',
  calories: '0',
  protein: '2',
  fats: '46.6',
  carbohydrates: '40',
  starch: '684',
  sugars: '0',
  fiber: '0',
  water: '0',
  price: '98.2',
  predominantAlimentoGroup: {
    alimentGroup: 'pollo',
    quantity: '20',
  },
});


const axios = require('axios').default;

axios.post('https://grupo-k-p11-menu-app.herokuapp.com/plates', plate).then(function(response: any) {
  console.log(response.status);
  mongoose.connection.close();
}).catch(function(error: any) {
  console.log(error);
  mongoose.connection.close();
});
