/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {mainPrompt, waitPrompt} from '../index';

// Ver Menu
enum ViewMenu {
    Alimentos = 'Alimentos',
    Platos = 'Platos',
    Menus = 'Menus',
    Volver = 'Volver'
}
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
