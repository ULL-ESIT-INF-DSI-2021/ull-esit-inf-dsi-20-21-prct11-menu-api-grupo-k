import {Document} from 'mongoose';
import {LocalMenu} from '../../class/menu/local_menu';
import {Plate} from '../../class/plate/plate';

export interface CartesInterface extends Document {
    name: string,
    plates: Plate[],
    menus: LocalMenu[],
  }
