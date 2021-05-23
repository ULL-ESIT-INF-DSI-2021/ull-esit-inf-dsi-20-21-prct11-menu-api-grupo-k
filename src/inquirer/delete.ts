/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {mainPrompt} from '../index';
import {deleteAlimentPrompt} from './aliments/aliments';
import {deleteMenuPrompt} from './menus/menus';
import {deletePlatePrompt} from './plates/plates';

/**
 * Delete Menu
 */
enum DeleteMenu {
    Alimentos = 'Alimentos',
    Platos = 'Platos',
    Menus = 'Menus',
    Volver = 'Volver'
  }
/**
 * Prompt para borrar
 */
export async function deletePrompt(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(DeleteMenu),
  });
  switch (answers['command']) {
    case DeleteMenu.Alimentos:
      deleteAlimentPrompt();
      break;
    case DeleteMenu.Platos:
      deletePlatePrompt();
      break;
    case DeleteMenu.Menus:
      deleteMenuPrompt();
      break;
    case DeleteMenu.Volver:
      mainPrompt();
      break;
  }
}
