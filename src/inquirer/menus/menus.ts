/* eslint-disable camelcase */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import * as inquirer from 'inquirer';
import {delay, waitPrompt} from '../..';
import {LinkMenus} from '../../index';


export async function postMenuPrompt(): Promise<void> {
  console.clear();
  console.log('Opcion en desarrollo...\n');
  waitPrompt();
}

export async function getMenuPrompt(): Promise<void> {
  console.clear();
  const nombre = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });
  const axios = require('axios');
  (async () => {
    axios.get(`${LinkMenus}?name=${nombre['add']}`).then(function(response: any) {
      console.log('Respuesta del servidor: ' + response.status);
      console.log('Menu:\n');
      console.log(response.data);
    }).catch(function(error: any) {
      console.log('Menu no encontrado!');
      console.log(error.message);
    });
    await delay(800);
    waitPrompt();
  })();
}

export async function deleteMenuPrompt(): Promise<void> {
  console.clear();
  const nombre = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Nombre: ',
  });
  const axios = require('axios');
  (async () => {
    axios.delete(`${LinkMenus}?name=${nombre['add']}`).then(function(response: any) {
      console.log('Respuesta del servidor: ' + response.status);
      console.log('Menu eliminado!');
      console.log(response.data);
    }).catch(function(error: any) {
      console.log('Menu no encontrado!');
      console.log(error.message);
    });
    await delay(800);
    waitPrompt();
  })();
}

export async function patchMenuPrompt(): Promise<void> {
  console.clear();
  console.log('Opcion en desarrollo...\n');
  waitPrompt();
}
