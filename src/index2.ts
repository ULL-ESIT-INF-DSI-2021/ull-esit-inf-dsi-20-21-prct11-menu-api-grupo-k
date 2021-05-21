/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import {Aliment, AlimentGroup} from './class/aliment/aliment';
import {Category, Plate} from './class/plate/plate';
import {plateModel, PlatesSchema} from './models/plates/PlatesSchema';
import * as mongoose from 'mongoose';
import './db/mongoose';


const queso_gouda = new Aliment('Queso gouda', 1, 25.5, 20, 0, 331, 0, 0, 0, 49.1, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);
const queso_mozarella = new Aliment('Queso mozarella', 1, 21.1, 20, 0, 353, 0, 0, 0, 49.1, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);

const ingredientes = new Map<Aliment, number>();

const test: [aliment: string, quantity: number][] = [];
test[0] = ['hola', 10];
test[1] = ['chao', 20];

type predominantType = {
    alimentGroup: string,
    quantity: number,
}

type ingreType = {
    aliment: string,
    quantity: number,
}

const pre: predominantType = {alimentGroup: 'pollito', quantity: 12};

const ing: ingreType[] = [{aliment: 'pollitox', quantity: 112}, {aliment: 'pollito', quantity: 12}];

ingredientes.clear();
ingredientes.set(queso_mozarella, 20);

ingredientes.set(queso_gouda, 10);
const plato_arepitas = new Plate('Arepitas con queso', ingredientes, Category.entree);


const plate = mongoose.model('plates', PlatesSchema);
const item = new plate;
item.name = 'arepas2';
item.category = 0;
item.calories = 0;
item.protein = 0;
item.fats = 0;
item.carbohydrates = 0;
item.starch = 0;
item.sugars = 0;
item.fiber = 0;
item.water = 0;
item.price = 0;
item.ingredients = ing;
item.predominantAlimentGroup = pre;


/* const plate = new plateModel({
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
  ingredients: test,
});
*/

const axios = require('axios').default;

axios.post('https://grupo-k-p11-menu-app.herokuapp.com/plates', item).then(function(response: any) {
  console.log(response.status);
  mongoose.connection.close();
}).catch(function(error: any) {
  console.log(error);
  mongoose.connection.close();
});

