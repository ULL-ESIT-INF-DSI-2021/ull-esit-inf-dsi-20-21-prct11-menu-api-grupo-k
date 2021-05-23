import {Plate} from '../plate/plate';
import {Menu} from './menu';

/**
 * Menu personalizado, aquellos que no estan preestablecidos por el local
 */
export class PerzonalisedMenu extends Menu {
  constructor(name: string) {
    super(name);
  }

  setMenu(plates: Plate[]): Boolean {
    this.plates = plates;
    this.calculatePrice();
    this.calculateNutritionalComposition();
    this.identifyAlimentGroupList();
    this.verify_menu = true;
    return true;
  }
}
