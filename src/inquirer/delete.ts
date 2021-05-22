/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import * as inquirer from 'inquirer';
import {mainPrompt, waitPrompt} from '../index';

// Delete Menu
enum DeleteMenu {
    Alimentos = 'Alimentos',
    Platos = 'Platos',
    Menus = 'Menus',
    Volver = 'Volver'
  }
export async function deletePrompt(): Promise<void> {
  console.clear();
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
