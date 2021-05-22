/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import * as inquirer from 'inquirer';
import {delay, waitPrompt} from '../..';
import {Aliment, AlimentGroup} from '../../class/aliment/aliment';
import {LinkAliments} from '../../index';
import {alimentModel, AlimentSchema} from '../../models/aliments/AlimentsSchema';

let alimentGroup: AlimentGroup = AlimentGroup.meat;

export async function postAlimentPrompt(): Promise<void> {
  console.clear();
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
  const alimentGroupAnswer = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Grupo Alimentario:',
    choices: Object.values(AlimentGroup),
  });
  switch (alimentGroupAnswer['command']) {
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
  const aliment = new alimentModel({
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
  });
  const axios = require('axios').default;
  (async () => {
    axios.post(LinkAliments, aliment).then(function(response: any) {
      console.log('Alimento agregado con exito!');
      console.log('Respuesta del servidor: ' + response.status);
    }).catch(function(error: any) {
      console.log(error);
    });
    await delay(800);
    waitPrompt();
  })();
}

export async function getAlimentPrompt(): Promise<void> {
  console.clear();
  const nombre = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });
  const aliment = new alimentModel({
    name: nombre['add'],
  });
  /* type nameType = {
    name: string,
    }
  const name: nameType = {name: nombre['add']};*/
  const axios = require('axios');
  (async () => {
    axios.get(LinkAliments, aliment).then(function(response: any) {
      console.log('Respuesta del servidor: ' + response.status);
      console.log('Alimento:\n');
      console.log(response.data);
    }).catch(function(error: any) {
      console.log(error.message);
    });
    await delay(800);
    waitPrompt();
  })();
}
