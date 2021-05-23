/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {deletePrompt} from './inquirer/delete';
import {viewPrompt} from './inquirer/get';
import {modifyPrompt} from './inquirer/patch';
import {addPrompt} from './inquirer/post';

export const LinkAliments = 'https://grupo-k-p11-menu-app.herokuapp.com/aliments';
export const LinkPlates = 'https://grupo-k-p11-menu-app.herokuapp.com/plates';
export const LinkMenus = 'https://grupo-k-p11-menu-app.herokuapp.com/menus';

export function delay(ms: number) {
  return new Promise( (resolve) => setTimeout(resolve, ms) );
}

// Wait
enum WaitMenu {
    Volver = 'Volver'
}
export async function waitPrompt(): Promise<void> {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Elige una opcion:',
    choices: Object.values(WaitMenu),
  });
  switch (answers['command']) {
    case WaitMenu.Volver:
      mainPrompt();
      break;
  }
}

// Main Menu
function displayMenu(): void {
  console.log('\nGrupo K - Practica 11\n');
}
enum MainMenu {
    Ver = 'Ver',
    Agregar = 'Agregar',
    Modificar = 'Modificar',
    Eliminar = 'Eliminar',
    Salir = 'Salir'
}
export async function mainPrompt(): Promise<void> {
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
      modifyPrompt();
      break;
    case MainMenu.Eliminar:
      deletePrompt();
      break;
    case MainMenu.Salir:
      console.clear();
      break;
  }
}
mainPrompt();
