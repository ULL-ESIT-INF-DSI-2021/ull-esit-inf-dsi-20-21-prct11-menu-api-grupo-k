import {Document} from 'mongoose';
import { LocalMenu } from '../menu/local_menu';
import { PerzonalisedMenu } from '../menu/personalized_menu';

export interface OrdersInterface extends Document {
    order_number: number, 
    order_menu: LocalMenu[],
    personalized_order: PerzonalisedMenu,   
    totalPrice: number
  }
