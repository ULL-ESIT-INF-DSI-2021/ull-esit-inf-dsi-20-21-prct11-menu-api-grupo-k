/* eslint-disable camelcase */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import * as inquirer from 'inquirer';
import {delay, LinkAliments, waitPrompt} from '../..';
import {Category, Plate} from '../../class/plate/plate';
import {LinkPlates} from '../../index';
import {PlatesSchema} from '../../models/plates/PlatesSchema';
import {alimentModel} from '../../models/aliments/AlimentsSchema';
import * as mongoose from 'mongoose';
import {Aliment, AlimentGroup} from '../../class/aliment/aliment';
const axios = require('axios');

let category: Category;

function getAlimentG(group: string): AlimentGroup {
  let ag: AlimentGroup = AlimentGroup.cereal;
  Object.values(AlimentGroup).forEach((groups) => {
    if (groups === group) {
      ag = groups;
    }
  });
  return ag;
}

export async function postPlatePrompt(): Promise<void> {
  console.clear();

  const nombre = await inquirer.prompt({
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

  const alimentosdb: Aliment[] = [];
  const alimentosdbModel: typeof alimentModel[] = [];
  axios.get(LinkAliments).then(function(response: any) {
    console.log(response.data.length);
    for (let i = 0; i < response.data.length; i++) {
      alimentosdbModel.push(response.data[i]);
      const alimentoNew = new Aliment(
          response.data[i].name,
          response.data[i].protein,
          response.data[i].fats,
          response.data[i].carbohydrates,
          response.data[i].calories,
          response.data[i].starch,
          response.data[i].sugars,
          response.data[i].fiber,
          response.data[i].water,
          response.data[i].price,
          response.data[i].city,
          response.data[i].locality,
          getAlimentG(response.data[i].aliment_group));
      alimentosdb.push(alimentoNew);
    }
  type alimentType = {
    aliment: any,
    quantity: number,
  }
  const ingNew: alimentType[] = [];
  const ingredientes = new Map<Aliment, number>();

  const AlimentsChoice: string[] = [];
  for (let i = 0; i < alimentosdb.length; i++) {
    AlimentsChoice.push(alimentosdb[i].getName());
  }

  (async () => {
    const CA = await inquirer.prompt({
      type: 'checkbox',
      name: 'Aliments',
      message: 'Elige los alimentos: ',
      choices: AlimentsChoice,
    });

    for (let i = 0; i < CA.Aliments.length; i++) {
      const cantidad = await inquirer.prompt({
        type: 'input',
        name: 'cant',
        message: `Cantidad de ${CA.Aliments[i]}: `,
      });
      for (let j = 0; j < alimentosdb.length; j++) {
        if (CA.Aliments[i] === alimentosdb[j].getName()) {
          const aux = new alimentModel({
            name: alimentosdb[j].getName(),
            protein: alimentosdb[j].getProtein(),
            fats: alimentosdb[j].getFats(),
            carbohydrates: alimentosdb[j].getCarbohydrates(),
            calories: alimentosdb[j].getCalories(),
            starch: alimentosdb[j].getStarch(),
            sugars: alimentosdb[j].getSugars(),
            fiber: alimentosdb[j].getFiber(),
            water: alimentosdb[j].getWater(),
            price: alimentosdb[j].getPriceOfAliment(),
            city: alimentosdb[j].getCity(),
            locality: alimentosdb[j].getLocality(),
            aliment_group: alimentosdb[j].getAlimentGroup(),
          });
          ingNew.push({aliment: aux, quantity: parseInt(cantidad.cant)});
          ingredientes.set(alimentosdb[j], parseInt(cantidad.cant));
        }
      }
    }

    const plateNew: Plate = new Plate(nombre['add'], ingredientes, category);

    type predominantType = {
      alimentGroup: string,
      quantity: number,
    }
    const pre: predominantType = {alimentGroup: plateNew.getPredominantAlimentGroup()[0], quantity: plateNew.getPredominantAlimentGroup()[1]};

    const plate = mongoose.model('plates', PlatesSchema);
    const item = new plate;
    item.name = plateNew.getName();
    item.category = plateNew.getCategory();
    item.calories = plateNew.getCalories();
    item.protein = plateNew.getProtein();
    item.fats = plateNew.getFats();
    item.carbohydrates = plateNew.getCarbohydrates();
    item.starch = plateNew.getStarch();
    item.sugars = plateNew.getSugars();
    item.fiber = plateNew.getFiber();
    item.water = plateNew.getWater();
    item.price = plateNew.getPrice();
    item.ingredients = ingNew;
    item.predominantAlimentGroup = pre;
    (async () => {
      axios.post(LinkPlates, item).then(function(response: any) {
        console.log('Plato agregado con exito!');
        console.log('Respuesta del servidor: ' + response.status);
      }).catch(function(error: any) {
        console.log(error.message);
      });
      await delay(800);
      waitPrompt();
    })();
  })();
  }).catch(function(error: any) {
    console.log(error.message);
  });
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

export async function patchPlatePrompt(): Promise<void> {
  console.clear();
  console.log('Nombre del plato a modificar:');
  const nombreMod = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });
  console.clear();
  console.log('Nuevos atributos:');
  console.log('Nombre:');
  const nombre = await inquirer.prompt({
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

  const alimentosdb: Aliment[] = [];
  const alimentosdbModel: typeof alimentModel[] = [];
  axios.get(LinkAliments).then(function(response: any) {
    console.log(response.data.length);
    for (let i = 0; i < response.data.length; i++) {
      alimentosdbModel.push(response.data[i]);
      const alimentoNew = new Aliment(
          response.data[i].name,
          response.data[i].protein,
          response.data[i].fats,
          response.data[i].carbohydrates,
          response.data[i].calories,
          response.data[i].starch,
          response.data[i].sugars,
          response.data[i].fiber,
          response.data[i].water,
          response.data[i].price,
          response.data[i].city,
          response.data[i].locality,
          getAlimentG(response.data[i].aliment_group));
      alimentosdb.push(alimentoNew);
    }
  type alimentType = {
    aliment: any,
    quantity: number,
  }
  const ingNew: alimentType[] = [];
  const ingredientes = new Map<Aliment, number>();

  const AlimentsChoice: string[] = [];
  for (let i = 0; i < alimentosdb.length; i++) {
    AlimentsChoice.push(alimentosdb[i].getName());
  }

  (async () => {
    const CA = await inquirer.prompt({
      type: 'checkbox',
      name: 'Aliments',
      message: 'Elige los alimentos: ',
      choices: AlimentsChoice,
    });

    for (let i = 0; i < CA.Aliments.length; i++) {
      const cantidad = await inquirer.prompt({
        type: 'input',
        name: 'cant',
        message: `Cantidad de ${CA.Aliments[i]}: `,
      });
      for (let j = 0; j < alimentosdb.length; j++) {
        if (CA.Aliments[i] === alimentosdb[j].getName()) {
          const aux = new alimentModel({
            name: alimentosdb[j].getName(),
            protein: alimentosdb[j].getProtein(),
            fats: alimentosdb[j].getFats(),
            carbohydrates: alimentosdb[j].getCarbohydrates(),
            calories: alimentosdb[j].getCalories(),
            starch: alimentosdb[j].getStarch(),
            sugars: alimentosdb[j].getSugars(),
            fiber: alimentosdb[j].getFiber(),
            water: alimentosdb[j].getWater(),
            price: alimentosdb[j].getPriceOfAliment(),
            city: alimentosdb[j].getCity(),
            locality: alimentosdb[j].getLocality(),
            aliment_group: alimentosdb[j].getAlimentGroup(),
          });
          ingNew.push({aliment: aux, quantity: parseInt(cantidad.cant)});
          ingredientes.set(alimentosdb[j], parseInt(cantidad.cant));
        }
      }
    }

    const plateNew: Plate = new Plate(nombre['add'], ingredientes, category);

    type predominantType = {
      alimentGroup: string,
      quantity: number,
    }
    const pre: predominantType = {alimentGroup: plateNew.getPredominantAlimentGroup()[0], quantity: plateNew.getPredominantAlimentGroup()[1]};

    const plate = mongoose.model('plates', PlatesSchema);
    const item = new plate;
    item.name = plateNew.getName();
    item.category = plateNew.getCategory();
    item.calories = plateNew.getCalories();
    item.protein = plateNew.getProtein();
    item.fats = plateNew.getFats();
    item.carbohydrates = plateNew.getCarbohydrates();
    item.starch = plateNew.getStarch();
    item.sugars = plateNew.getSugars();
    item.fiber = plateNew.getFiber();
    item.water = plateNew.getWater();
    item.price = plateNew.getPrice();
    item.ingredients = ingNew;
    item.predominantAlimentGroup = pre;
    (async () => {
      axios.patch(`${LinkPlates}?name=${nombreMod['add']}`, item).then(function(response: any) {
        console.log('Plato modificado con exito!');
        console.log('Respuesta del servidor: ' + response.status);
      }).catch(function(error: any) {
        console.log(error);
      });
      await delay(800);
      waitPrompt();
    })();
  })();
  }).catch(function(error: any) {
    console.log(error.message);
  });
}
