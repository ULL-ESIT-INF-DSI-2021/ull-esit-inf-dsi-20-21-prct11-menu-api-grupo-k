/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {mainPrompt} from '../index';
import {patchAlimentPrompt} from './aliments/aliments';
import {patchMenuPrompt} from './menus/menus';
import {patchPlatePrompt} from './plates/plates';

/**
 * Modificar Menu
 * */
enum ModMenu {
    Alimentos = 'Alimentos',
    Platos = 'Platos',
    Menus = 'Menus',
    Volver = 'Volver'
}
/**
 * Prompt de inquire para modificar alimentos, platos o menus
 */
export async function modifyPrompt(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(ModMenu),
  });
  switch (answers['command']) {
    case ModMenu.Alimentos:
      patchAlimentPrompt();
      break;
    case ModMenu.Platos:
      patchPlatePrompt();
      break;
    case ModMenu.Menus:
      patchMenuPrompt();
      break;
    case ModMenu.Volver:
      mainPrompt();
      break;
  }
}
