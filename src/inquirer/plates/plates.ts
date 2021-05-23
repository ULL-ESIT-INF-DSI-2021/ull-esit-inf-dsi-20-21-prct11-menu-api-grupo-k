/* eslint-disable camelcase */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import * as inquirer from 'inquirer';
import {delay, LinkAliments, waitPrompt} from '../..';
// import {Aliment, AlimentGroup} from '../../class/aliment/aliment';
import {Category, Plate} from '../../class/plate/plate';
import {LinkPlates} from '../../index';
import {PlatesSchema} from '../../models/plates/PlatesSchema';
// import {alimentModel} from '../../models/aliments/AlimentsSchema';
import * as mongoose from 'mongoose';


let category: Category;


export async function postPlatePrompt(): Promise<void> {
  console.clear();
  console.log('Opcion no disponible..');

  /* const nombre = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });

  // Eleccion de categoria plato
  const platesCategory = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Categoria de plato:',
    choices: Object.values(Category),
  });
  switch (platesCategory['command']) {
    case Category.entree:
      category = Category.entree;
      break;
    case Category.maincourse:
      category = Category.maincourse;
      break;
    case Category.secondcourse:
      category = Category.secondcourse;
      break;
    case Category.dessert:
      category = Category.dessert;
      break;
  }

  type ingreType = {
    aliment: string,
    quantity: number,
  }
  const ing: ingreType[] = [];
  const alimentosdb: string[] = [];
  const axios = require('axios');

  axios.get(LinkAliments).then(function(response: any) {
    console.log(response.data.length);
    for (let i = 0; i < response.data.length; i++) {
      alimentosdb.push(response.data[i].name);
    }
  }).catch(function(error: any) {
    console.log(error.message);
  });

  inquirer.prompt([
    {
      name: 'Aliments',
      type: 'checkbox',
      message: 'Alimentos:',
      choices: alimentosdb,
    },
  ]).then((answer) => {
    for (let i = 0; i < answer.Aliments.length; i++) {
      const aux: ingreType = {aliment: answer.Aliments[i], quantity: 0};
      ing.push(aux);
    }
  });

  type predominantType = {
    alimentGroup: string,
    quantity: number,
  }
  const pre: predominantType = {alimentGroup: 'pollito', quantity: 12};

  const plate = mongoose.model('plates', PlatesSchema);
  const item = new plate;
  item.name = nombre['add'];
  item.category = category;
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
  (async () => {
    axios.post(LinkPlates, item).then(function(response: any) {
      console.log('Plato agregado con exito!');
      console.log('Respuesta del servidor: ' + response.status);
    }).catch(function(error: any) {
      console.log(error);
    });
    await delay(800);
    waitPrompt();
  })();*/
  waitPrompt();
}

export async function getPlatePrompt(): Promise<void> {
  console.clear();
  const nombre = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });
  const axios = require('axios');
  (async () => {
    axios.get(`${LinkPlates}?name=${nombre['add']}`).then(function(response: any) {
      console.log('Respuesta del servidor: ' + response.status);
      console.log('Plato:\n');
      console.log(response.data);
    }).catch(function(error: any) {
      console.log(error.message);
    });
    await delay(800);
    waitPrompt();
  })();
}

export async function deletePlatePrompt(): Promise<void> {
  console.clear();
  const nombre = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });
  const axios = require('axios');
  (async () => {
    axios.delete(`${LinkPlates}?name=${nombre['add']}`).then(function(response: any) {
      console.log('Respuesta del servidor: ' + response.status);
      console.log('Plato eliminado!');
      console.log(response.data);
    }).catch(function(error: any) {
      console.log('Plato no encontrado!');
      console.log(error.message);
    });
    await delay(800);
    waitPrompt();
  })();
}

/* export async function patchPlatePrompt(): Promise<void> {
  console.clear();
  console.log('Nombre del alimento a modificar:');
  const nombreMod = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });
  console.clear();
  console.log('Nuevos atributos:');
  const nombre = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });
  const price = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Precio: ',
  });
  const proteinas = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Proteinas: ',
  });
  const grasas = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Grasas: ',
  });
  const carbohidratos = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Carbohidratos: ',
  });
  const calorias = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Calorias: ',
  });
  const almidon = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Almidon: ',
  });
  const azucar = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Azucar: ',
  });
  const fibra = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Fibra: ',
  });
  const agua = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Agua: ',
  });
  const localidad = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Localidad: ',
  });
  const ciudad = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Ciudad: ',
  });
  // Eleccion de grupo alimentario
  const plateGroupAnswer = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Grupo Alimentario:',
    choices: Object.values(AlimentGroup),
  });
  switch (plateGroupAnswer['command']) {
    case AlimentGroup.meat:
      alimentGroup = AlimentGroup.meat;
      break;
    case AlimentGroup.fish:
      alimentGroup = AlimentGroup.fish;
      break;
    case AlimentGroup.eggs:
      alimentGroup = AlimentGroup.eggs;
      break;
    case AlimentGroup.tofu:
      alimentGroup = AlimentGroup.tofu;
      break;
    case AlimentGroup.seeds:
      alimentGroup = AlimentGroup.seeds;
      break;
    case AlimentGroup.nuts:
      alimentGroup = AlimentGroup.nuts;
      break;
    case AlimentGroup.legumes:
      alimentGroup = AlimentGroup.legumes;
      break;
    case AlimentGroup.vegetables:
      alimentGroup = AlimentGroup.vegetables;
      break;
    case AlimentGroup.milk_derivate:
      alimentGroup = AlimentGroup.milk_derivate;
      break;
    case AlimentGroup.cereal:
      alimentGroup = AlimentGroup.cereal;
      break;
    case AlimentGroup.fruit:
      alimentGroup = AlimentGroup.fruit;
      break;
  }
  const alimento = new Aliment(nombre['add'], proteinas['add'], grasas['add'], carbohidratos['add'], calorias['add'], almidon['add'], azucar['add'], fibra['add'], agua['add'], price['add'], ciudad['add'], localidad['add'], alimentGroup);
  type alimentType = {
    name: string,
    protein: number,
    fats: number,
    carbohydrates: number,
    calories: number,
    starch: number,
    sugars: number,
    fiber: number,
    water: number,
    price: number,
    city: string,
    locality: string,
    aliment_group: string,
  }
  const aliment: alimentType = {
    name: alimento.getName(),
    protein: alimento.getProtein(),
    fats: alimento.getFats(),
    carbohydrates: alimento.getCarbohydrates(),
    calories: alimento.getCalories(),
    starch: alimento.getStarch(),
    sugars: alimento.getSugars(),
    fiber: alimento.getFiber(),
    water: alimento.getWater(),
    price: alimento.getPriceOfAliment(),
    city: alimento.getCity(),
    locality: alimento.getLocality(),
    aliment_group: alimento.getAlimentGroup(),
  };
  const axios = require('axios');
  (async () => {
    axios.patch(`${LinkPlates}?name=${nombreMod['add']}`, aliment).then(function(response: any) {
      console.log('Respuesta del servidor: ' + response.status);
      console.log('Alimento modificado:\n');
      console.log(response.data);
    }).catch(function(error: any) {
      console.log('Alimento no encontrado!');
      console.log(error);
    });
    await delay(800);
    waitPrompt();
  })();
}*/
