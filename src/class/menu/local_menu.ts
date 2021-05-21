/* eslint-disable camelcase */
import {Category, Plate} from '../plate/plate';
import {Menu} from './menu';

export class LocalMenu extends Menu {
  constructor(name: string) {
    super(name);
  }

  setMenu(plates: Plate[]) : boolean {
    const menu_rules: boolean[] = [false, false, false, false];
    let cont: number = 0;
    if (plates.length >= 3) {
      for (let i = 0; i < plates.length; i++) {
        if (plates[i].getCategory() == Category.entree) {
          menu_rules[0] = true;
        }
        if (plates[i].getCategory() == Category.maincourse) {
          menu_rules[1] = true;
        }
        if (plates[i].getCategory() == Category.secondcourse) {
          menu_rules[2] = true;
        }
        if (plates[i].getCategory() == Category.dessert) {
          menu_rules[3] = true;
        }
      }
      menu_rules.forEach((element) => {
        if (element) {
          cont++;
        }
      });
      if (cont >= 3) {
        this.verify_menu = true;
        this.plates = plates;
        this.calculatePrice();
        this.calculateNutritionalComposition();
        this.identifyAlimentGroupList();
        return true;
      } else {
        this.verify_menu = false;
        return false;
      }
    } else {
      this.verify_menu = false;
      return false;
    }
  }
}
