/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import * as inquirer from 'inquirer';
import {delay, mainPrompt} from '../index';
import {postAlimentPrompt} from './aliments/aliments';
// import {postMenuPrompt} from './menus/menus';
import {postPlatePrompt} from './plates/plates';

// Menu post
enum addMenu {
    Alimentos = 'Alimentos',
    Platos = 'Platos',
    Menus = 'Menus',
    Volver = 'Volver'
  }
export async function addPrompt(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(addMenu),
  });
  switch (answers['command']) {
    case addMenu.Alimentos:
      postAlimentPrompt();
      break;
    case addMenu.Platos:
      postPlatePrompt();
      break;
    case addMenu.Menus:
      // postMenuPrompt();
      break;
    case addMenu.Volver:
      mainPrompt();
      break;
  }
}
