/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {mainPrompt, waitPrompt} from '../index';
import {patchAlimentPrompt} from './aliments/aliments';

// Modificar Menu
enum ModMenu {
    Alimentos = 'Alimentos',
    Platos = 'Platos',
    Menus = 'Menus',
    Volver = 'Volver'
}
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
      break;
    case ModMenu.Menus:
      break;
    case ModMenu.Volver:
      mainPrompt();
      break;
  }
}
