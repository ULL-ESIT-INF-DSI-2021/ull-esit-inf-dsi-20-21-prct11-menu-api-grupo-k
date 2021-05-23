/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {mainPrompt, waitPrompt} from '../index';
import {getAlimentPrompt} from './aliments/aliments';
import {getMenuPrompt} from './menus/menus';
import {getPlatePrompt} from './plates/plates';

/**
 * Ver Menu
*/
enum ViewMenu {
    Alimentos = 'Alimentos',
    Platos = 'Platos',
    Menus = 'Menus',
    Volver = 'Volver'
}
/**
 * Prompt de inquire para ver alimentos, platos o menus
 */
export async function viewPrompt(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(ViewMenu),
  });
  switch (answers['command']) {
    case ViewMenu.Alimentos:
      getAlimentPrompt();
      break;
    case ViewMenu.Platos:
      getPlatePrompt();
      break;
    case ViewMenu.Menus:
      getMenuPrompt();
      break;
    case ViewMenu.Volver:
      mainPrompt();
      break;
  }
}
