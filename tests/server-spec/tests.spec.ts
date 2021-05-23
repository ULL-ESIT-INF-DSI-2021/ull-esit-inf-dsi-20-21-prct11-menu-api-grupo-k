/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {alimentModel} from '../../src/models/aliments/AlimentsSchema';
import {plateModel} from '../../src/models/plates/PlatesSchema';
import {menuModel, PlatesSchemaNoUnique} from '../../src/models/menu/MenusSchema';
import {AlimentGroup} from '../../src/class/aliment/aliment';
const axios = require('axios').default;
import * as mongoose from 'mongoose';

type alimentTypePlate = {
  aliment: any,
  quantity: number,
}

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

type plateType = {
  name: string,
  category: string,
  calories: number,
  protein: number,
  fats: number,
  carbohydrates: number,
  starch: number,
  sugars: number,
  fiber: number,
  water: number,
  price: number,
  ingredients: alimentTypePlate[],
  predominantAlimentGroup: predominantType,
}

type menuType = {
  name: string,
  plates: plateType[],
  price: number,
  protein: number,
  fats: number,
  carbohydrates: number,
  calories: number,
  starch: number,
  sugars: number,
  fiber: number,
  water:number,
  alimentGroupList : predominantType[];
  verify_menu: boolean;
}

const aliment = new alimentModel({
  name: 'test-alimento',
  protein: 1,
  fats: 2,
  carbohydrates: 3,
  calories: 4,
  starch: 5,
  sugars: 6,
  fiber: 7,
  water: 8,
  price: 9,
  city: 'Santa Cruz',
  locality: 'Tenerife',
  aliment_group: AlimentGroup.cereal,
});


const ingNew: alimentTypePlate[] = [];
ingNew.push({aliment: aliment, quantity: 2});

type predominantType = {
    alimentGroup: string,
    quantity: number,
}

const pre: predominantType = {alimentGroup: 'Carne', quantity: 5};

const plato = new plateModel({
  name: 'test-plato',
  category: 'entree',
  calories: 1,
  protein: 2,
  fats: 3,
  carbohydrates: 4,
  starch: 5,
  sugars: 6,
  fiber: 7,
  water: 8,
  price: 9,
  ingredients: ingNew,
  predominantAlimentGroup: pre,
});

const plateModelNoUnique = mongoose.model('NoUniquePlate', PlatesSchemaNoUnique);

const plato_no_unique = new plateModelNoUnique({
  name: 'test-plato',
  category: 'entree',
  calories: 1,
  protein: 2,
  fats: 3,
  carbohydrates: 4,
  starch: 5,
  sugars: 6,
  fiber: 7,
  water: 8,
  price: 9,
  ingredients: ingNew,
  predominantAlimentGroup: pre,
});


const menu = new menuModel({
  name: 'test-menu',
  plates: [plato_no_unique],
  price: 1,
  protein: 2,
  fats: 3,
  carbohydrates: 4,
  calories: 5,
  starch: 6,
  sugars: 7,
  fiber: 8,
  water: 9,
  alimentGroupList: [pre],
  verify_menu: true,
});

async function mainAliment(operacion: string, url: string) {
  let response;
  switch (operacion) {
    case 'post':
      response = await axios.post(url, aliment);
      break;
    case 'get':
      response = await axios.get(url);
      break;
    case 'patch':
      const aliment_update : alimentType = {
        name: 'test-alimento-update',
        protein: 1,
        fats: 2,
        carbohydrates: 3,
        calories: 4,
        starch: 5,
        sugars: 6,
        fiber: 7,
        water: 8,
        price: 9,
        city: 'Santa Cruz',
        locality: 'Tenerife',
        aliment_group: AlimentGroup.cereal,
      };
      response = await axios.patch(url, aliment_update);
      break;
    case 'delete':
      response = await axios.delete(url);
      break;
  }

  return response;
};

async function mainPlate(operacion: string, url: string) {
  let response;
  switch (operacion) {
    case 'post':
      response = await axios.post(url, plato);
      break;
    case 'get':
      response = await axios.get(url);
      break;
    case 'patch':
      const plate_update : plateType = {
        name: 'test-plato-update',
        category: 'entree',
        calories: 1,
        protein: 2,
        fats: 3,
        carbohydrates: 4,
        starch: 5,
        sugars: 6,
        fiber: 7,
        water: 8,
        price: 9,
        ingredients: ingNew,
        predominantAlimentGroup: pre,
      };
      response = await axios.patch(url, plate_update);
      break;
    case 'delete':
      response = await axios.delete(url);
      break;
  }
  return response;
};

async function mainMenu(operacion: string, url: string) {
  let response;
  switch (operacion) {
    case 'post':
      response = await axios.post(url, menu);
      break;
    case 'get':
      response = await axios.get(url);
      break;
    case 'patch':
      const menu_update : menuType = {
        name: 'test-menu-update',
        plates: [plato_no_unique],
        price: 1,
        protein: 2,
        fats: 3,
        carbohydrates: 4,
        calories: 5,
        starch: 6,
        sugars: 7,
        fiber: 8,
        water: 9,
        alimentGroupList: [pre],
        verify_menu: true,
      };
      response = await axios.patch(url, menu_update);
      break;
    case 'delete':
      response = await axios.delete(url);
      break;
  }
  return response;
};

// Pruebas
describe('Tests para el CRUD de menu-app:', () => {
  it('Agregar a la base de datos un alimento', async () => {
    const response = await mainAliment('post', 'https://grupo-k-p11-menu-app.herokuapp.com/aliments');
    expect(response.status).to.equal(201);
  });


  it('Buscar en la base de datos el alimento: test-alimento', async () => {
    const response = await mainAliment('get', 'https://grupo-k-p11-menu-app.herokuapp.com/aliments?name=test-alimento');
    expect(response.status).to.equal(200);
  });

  it('Modificar el alimento : test-alimento', async () => {
    const response = await mainAliment('patch', 'https://grupo-k-p11-menu-app.herokuapp.com/aliments?name=test-alimento');
    expect(response.status).to.equal(200);
  });

  it('Eliminar en la base de datos el alimento: test-alimento-update', async () => {
    const response = await mainAliment('delete', 'https://grupo-k-p11-menu-app.herokuapp.com/aliments?name=test-alimento-update');
    expect(response.status).to.equal(200);
  });

  // -------------------------------Platos---------------------------------------------------

  it('Agregar a la base de datos un plato', async () => {
    const response = await mainPlate('post', 'https://grupo-k-p11-menu-app.herokuapp.com/plates');
    expect(response.status).to.equal(201);
  });

  it('Buscar en la base de datos el plato: test-plato', async () => {
    const response = await mainPlate('get', 'https://grupo-k-p11-menu-app.herokuapp.com/plates?name=test-plato');
    expect(response.status).to.equal(200);
  });

  it('Modificar el plato : test-plato', async () => {
    const response = await mainPlate('patch', 'https://grupo-k-p11-menu-app.herokuapp.com/plates?name=test-plato');
    expect(response.status).to.equal(200);
  });

  it('Eliminar en la base de datos el plato: test-plato-update', async () => {
    const response = await mainPlate('delete', 'https://grupo-k-p11-menu-app.herokuapp.com/plates?name=test-plato-update');
    expect(response.status).to.equal(200);
  });

  // -------------------------------Menu---------------------------------------------------

  it('Agregar a la base de datos un menu', async () => {
    const response = await mainMenu('post', 'https://grupo-k-p11-menu-app.herokuapp.com/menus');
    expect(response.status).to.equal(201);
  });

  it('Buscar en la base de datos el menu: test-menu', async () => {
    const response = await mainMenu('get', 'https://grupo-k-p11-menu-app.herokuapp.com/menus?name=test-menu');
    expect(response.status).to.equal(200);
  });

  it('Modificar el menu : test-menu', async () => {
    const response = await mainMenu('patch', 'https://grupo-k-p11-menu-app.herokuapp.com/menus?name=test-menu');
    expect(response.status).to.equal(200);
  });

  it('Eliminar en la base de datos el menu: test-menu-update', async () => {
    const response = await mainMenu('delete', 'https://grupo-k-p11-menu-app.herokuapp.com/menus?name=test-menu-update');
    expect(response.status).to.equal(200);
  });
});
