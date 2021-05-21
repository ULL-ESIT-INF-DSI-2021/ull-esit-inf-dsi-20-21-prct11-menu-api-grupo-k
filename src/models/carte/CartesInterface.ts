import {Document} from 'mongoose';
import { LocalMenu } from '../menu/local_menu';
import { Plate } from '../plate/plate';

export interface CartesInterface extends Document {
    name: string, 
    plates: Plate[],
    menus: LocalMenu[],   
  }
