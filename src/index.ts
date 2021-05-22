/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {Aliment, AlimentGroup} from './class/aliment/aliment';
import {alimentModel} from './models/aliments/AlimentsSchema';
import * as mongoose from 'mongoose';
import './db/mongoose';

let alimentGroup: AlimentGroup = AlimentGroup.meat;

function delay(ms: number) {
  return new Promise( (resolve) => setTimeout(resolve, ms) );
}

// Menu de Agregar
enum addMenu {
  Alimentos = 'Alimentos',
  Platos = 'Platos',
  Menus = 'Menus',
  Volver = 'Volver'
}
async function addPrompt(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(addMenu),
  });
  switch (answers['command']) {
    case addMenu.Alimentos:
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
      const answers2 = await inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Grupo Alimentario:',
        choices: Object.values(AlimentGroup),
      });
      switch (answers2['command']) {
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
        axios.post('https://grupo-k-p11-menu-app.herokuapp.com/aliments', aliment).then(function(response: any) {
          console.log('Alimento agregado con exito!');
          console.log('Respuesta del servidor: ' + response.status);
        }).catch(function(error: any) {
          console.log(error);
        });
        await delay(800);
        waitPrompt();
      })();
      break;
    case addMenu.Volver:
      mainPrompt();
      break;
  }
}

// Wait Menu
enum WaitMenu {
    Volver = 'Volver'
}
async function waitPrompt(): Promise<void> {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(WaitMenu),
  });
  switch (answers['command']) {
    case ViewMenu.Volver:
      mainPrompt();
      break;
  }
}

// Ver Menu
enum ViewMenu {
    Alimentos = 'Alimentos',
    Platos = 'Platos',
    Menus = 'Menus',
    Volver = 'Volver'
}
async function viewPrompt(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(ViewMenu),
  });
  switch (answers['command']) {
    case ViewMenu.Alimentos:
      console.clear();
      console.log('\nAlimentos:');

      waitPrompt();
      break;
    case ViewMenu.Platos:
      console.clear();
      console.log('\nPlatos:');

      waitPrompt();
      break;
    case ViewMenu.Menus:
      console.clear();
      console.log('\nMenus:');

      waitPrompt();
      break;
    case ViewMenu.Volver:
      mainPrompt();
      break;
  }
}


// Delete Menu
enum DeleteMenu {
  Alimentos = 'Alimentos',
  Platos = 'Platos',
  Menus = 'Menus',
  Volver = 'Volver'
}
async function deletePrompt(): Promise<void> {
  console.clear();
  displayMenu();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(DeleteMenu),
  });
  switch (answers['command']) {
    case DeleteMenu.Platos:
      const flag = false;
      console.clear();
      console.log('Nombre del plato a eliminar: ');
      const nombre = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Nombre: ',
      });
      if (flag) {
        console.clear();
        console.log('Plato eliminado!');
        waitPrompt();
      } else {
        console.clear();
        console.log('Plato no encontrado..');
        waitPrompt();
      }
      break;
    case DeleteMenu.Volver:
      mainPrompt();
      break;
  }
}

// Main Menu
function displayMenu(): void {
  console.log('\nRestaurante Puchini\n');
}
enum MainMenu {
    Ver = 'Ver',
    Agregar = 'Agregar',
    Modificar = 'Modificar',
    Eliminar = 'Eliminar',
    Salir = 'Salir'
}
async function mainPrompt(): Promise<void> {
  console.clear();
  displayMenu();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(MainMenu),
  });
  switch (answers['command']) {
    case MainMenu.Ver:
      viewPrompt();
      break;
    case MainMenu.Agregar:
      addPrompt();
      break;
    case MainMenu.Modificar:
      // addPrompt();
      break;
    case MainMenu.Eliminar:
      deletePrompt();
      break;
    case MainMenu.Salir:
      mongoose.connection.close();
      break;
  }
}

mainPrompt();
