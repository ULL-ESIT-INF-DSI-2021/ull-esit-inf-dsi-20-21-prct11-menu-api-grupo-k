/* eslint-disable max-len */
/* eslint-disable camelcase */
import {Aliment, AlimentGroup} from './class/aliment/aliment';
import {Category, Plate} from './class/plate/plate';

const queso_gouda = new Aliment('Queso gouda', 1, 25.5, 20, 0, 331, 0, 0, 0, 49.1, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);
const queso_mozarella = new Aliment('Queso mozarella', 1, 21.1, 20, 0, 353, 0, 0, 0, 49.1, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);

const ingredientes = new Map<Aliment, number>();

const test = new Map<string, number>();
test.set('pollo', 20);
// test.set('arroz', 10);

ingredientes.clear();
ingredientes.set(queso_mozarella, 20);

ingredientes.set(queso_gouda, 10);
const plato_arepitas = new Plate('Arepitas con queso', ingredientes, Category.entree);

console.log(JSON.stringify(test));

console.log(plato_arepitas);
