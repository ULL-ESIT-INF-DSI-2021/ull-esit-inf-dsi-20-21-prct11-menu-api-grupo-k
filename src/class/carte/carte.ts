/* eslint-disable max-len */

import {LocalMenu} from '../menu/local_menu';
import {Plate} from '../plate/plate';

/**
 * implementation of a Restaurant Carte, its constais __plates__ and Predefined __SetMenus__
 */
export class Carte {
    private plates: Plate[] = [];
    private menus: LocalMenu[] = [];
    /**
   *
   * @param plates The list of all plates that clients can consume
   * @param menus The list of Predefined Menus tthat clients can consume
   */
    constructor(private name: string) {
    }


    addMenus(menu: LocalMenu[]) {
      this.menus = menu;
    }

    addPlates(plate: Plate[]) {
      this.plates = plate;
    }

    /**
   *Print all the plates and all the Menus in the Carte
   * @returns an string output with all the plates and the menus
   * ´´´ts
   * --Carta--
   * Nombre: menuOne
   *    --Menus--
   * Precio: 20
   * Platos:
   * Nombre : macarron con tomate
   *  Precio : 6
   * Nombre : OtroPLato
   *  Precio : 6
   * Nombre : postre
   *  Precio : 8
   * Composicion Nutricional:
   * Calorias: 94
   * Proteinas: 12
   * Grasas: 18
   * Carbohidratos: 28
   * Almidon: 32
   * Azucar: 42
   * Fibra: 18
   * Agua: 24
   * Grupo de alimento predominante: Vegetable,200,Vegetable,200,Vegetable,250
   *
   * Nombre: menuTwo
   * Precio: 26
   * Platos:
   * Nombre : macarron con tomate
   *  Precio : 6
   * Nombre : OtroPLato
   * Precio : 6
   * .
   * .
   * .
   * ´´´
   */
    print():string {
      let output: string = '';
      output += `------------${this.name}------------` + '\n';
      output += '--Carta--' + '\n';
      output += '--Menus--' + '\n';
      this.menus.forEach((menu) => {
        if (menu.verify_menu) {
          output += menu.print() + '\n';
        }
      });
      output += '--Plates--' + '\n';
      this.plates.forEach((plate) => {
        output += plate.print() + '\n';
      });
      return output;
    }
}
