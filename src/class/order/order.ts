/* eslint-disable camelcase */
/* eslint-disable max-len */
import {LocalMenu} from '../menu/local_menu';
import {PerzonalisedMenu} from '../menu/personalized_menu';
import {Plate} from '../plate/plate';

/**
 * Representation of a __client__ order in a restaurant, containt the __menus__ of the client´s choice, and also the ___plates__
 */
export class Order {
    public order_menu: LocalMenu[] = [];
    public personalized_order: PerzonalisedMenu = new PerzonalisedMenu('menu personalizado');
    private totalPrice: number = 0
    /**
   * @param totalPrice, the total price of al the food consumed
   * @param menus Menus and Plates consumed
   * @param
   */
    constructor(private order_number: number) {
    }


    /**
   * Funtion
   * @param menu the `menu` to be added to the order
   */
    addMenu(localmenu: LocalMenu[]):void {
      this.order_menu = localmenu;
    }

    addPlates(plates: Plate[]) {
      this.personalized_order.setMenu(plates);
    }

    calculateTotalPrice() {
      this.totalPrice = 0;
      this.totalPrice += this.personalized_order.getPrice();
      this.order_menu.forEach((element) => {
        this.totalPrice += element.getPrice();
      });
    }

    /**
   * Print all the menus and plates consumed, including the total price
   * if the order is Empty, it show that the order is empty
   * @returns A string output with all the menus and plates consumed, including the total price
   */
    print():string {
      this.calculateTotalPrice();
      let output: string = '';
      if (this.order_menu.length === 0 && this.personalized_order.getPlates().length === 0) {
        output += 'Empty Order:' + '\n';
      } else {
        output += 'Your Order is:' + '\n';
        if (this.order_menu.length > 0) {
          output += '--Menus--' + '\n';
          this.order_menu.forEach((menu) => {
            output += menu.getName() + '\n';
          });
        }
        if (this.personalized_order.getPlates().length > 0) {
          output += '--Plates--' + '\n';
          this.personalized_order.getPlates().forEach((plates) => {
            output += plates.getName() + '\n';
          });
        }

        output += '--TOTAL--' + '\n';
        output += this.totalPrice;
      }
      return output;
    }

    getTotalPrice():number {
      this.calculateTotalPrice();
      return this.totalPrice;
    }
}
