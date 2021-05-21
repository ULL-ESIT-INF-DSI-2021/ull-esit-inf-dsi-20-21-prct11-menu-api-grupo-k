/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import {Aliment, AlimentGroup} from './class/aliment/aliment';
import {Carte} from './class/carte/carte';
import {LocalMenu} from './class/menu/local_menu';
import {Menu} from './class/menu/menu';
import {PerzonalisedMenu} from './class/menu/personalized_menu';
import {Order} from './class/order/order';
import {Category, Plate} from './class/plate/plate';

const pollo = new Aliment('Pollo', 10, 20, 12, 0, 32, 0, 0, 0, 70.3, 'Tenerife', 'Santa Cruz', AlimentGroup.meat);
const patatas_fritas = new Aliment('Patatas fritas', 3, 6.8, 20, 66.8, 472, 65.8, 0.9, 1, 5.9, 'Tenerife', 'Santa Cruz', AlimentGroup.vegetables);
const zanahoria = new Aliment('Zanahoria', 2, 0.9, 10, 7.3, 40, 0, 7.3, 2.9, 88.7, 'Tenerife', 'Santa Cruz', AlimentGroup.vegetables);
const arroz_leche = new Aliment('Arroz con leche', 2, 3, 20, 20.2, 110, 3.9, 16.3, 0.02, 74.9, 'Tenerife', 'Santa cruz', AlimentGroup.milk_derivate);
const queso_gouda = new Aliment('Queso gouda', 1, 25.5, 20, 0, 331, 0, 0, 0, 49.1, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);
const queso_mozarella = new Aliment('Queso mozarella', 1, 21.1, 20, 0, 353, 0, 0, 0, 49.1, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);
const queso_feta = new Aliment('Queso feta', 1, 14.2, 20, 4.1, 265, 0, 4.09, 0, 55.2, 'Tenerife', 'Santa Cruz', AlimentGroup.milk_derivate);
const pan_pita = new Aliment('Pan de pita', 1.20, 7.6, 20, 53.4, 258, 40.6, 0, 1.2, 34.9, 'Tenerife', 'Santa Cruz', AlimentGroup.seeds);
const croquetas_cangrejo = new Aliment('Croquetas de cangrejo', 2, 8.1, 20, 4.5, 116, 3.2, 1.3, 0.14, 80, 'Tenerife', 'Santa Cruz', AlimentGroup.fish);
const Arroz_salvaje = new Aliment('Arroz Salvaje', 2, 4, 12, 20.5, 105, 20.6, 0.73, 1.8, 73.9, 'Tenerife', 'Santa Cruz', AlimentGroup.seeds);
const Rodaballo = new Aliment('Rodaballo', 15, 16.1, 4, 0, 5, 0, 0, 0, 80.3, 'Miramar', 'Santa Cruz', AlimentGroup.fish);
const UvasNegras = new Aliment('Uvas Negras', 12, 0.6, 0.5, 15.5, 6, 0, 15.5, 0.4, 83.5, 'Wuhan', 'China', AlimentGroup.fruit);
const Panceta = new Aliment('Panceta', 8, 12.5, 50, 0, 45, 0, 0, 0, 40.9, 'Sabadell', 'Barcelona', AlimentGroup.meat);
const Apio = new Aliment('Apio', 1.80, 1.30, 2.5, 1.3, 3.5, 0, 1.3, 1.8, 95.4, 'Miramar', 'Santa Cruz', AlimentGroup.vegetables);
const Lentejas = new Aliment('Lentejas', 3.5, 24.3, 9.5, 48.8, 12.5, 44.5, 1.2, 11.7, 10.8, 'Wuhan', 'China', AlimentGroup.legumes);
const Tocino = new Aliment('Tocino', 6.50, 8.4, 85.8, 0, 55.5, 0, 0, 0, 12.5, 'Sabadell', 'Barcelona', AlimentGroup.meat);
const Arroz = new Aliment('Arroz Blanco', 0.25, 7, 0.12, 86, 4, 85.8, 0.2, 0.2, 5.9, 'Miramar', 'Santa Cruz', AlimentGroup.seeds);
const Anguila = new Aliment('Anguila', 6.50, 16.3, 32, 0, 25, 0, 0, 0, 68.2, 'Wuhan', 'China', AlimentGroup.fish);
const Aguacate = new Aliment('Aguacate', 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, 'Sabadell', 'Barcelona', AlimentGroup.vegetables);
const Salmon = new Aliment('Salmon', 9, 18.4, 12, 0, 11, 0, 0, 0, 69.6, 'Miramar', 'Santa Cruz', AlimentGroup.fish);
const Chufa = new Aliment('Chufa', 7, 6.1, 5, 42.5, 24, 0, 14.7, 17.4, 10.3, 'Wuhan', 'China', AlimentGroup.fruit);
const Ballena = new Aliment('Ballena', 43, 23.2, 80, 0, 45, 0, 0, 0, 73.4, 'Sabadell', 'Barcelona', AlimentGroup.fish);
const tomate = new Aliment('Tomate', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'Escocia', 'Escocia', AlimentGroup.vegetables);
const macarron = new Aliment('Macarron', 2, 2, 3, 4, 5, 6, 9, 1, 2, 'España', 'Madrid', AlimentGroup.cereal);
const atun = new Aliment('Atun', 5, 9, 3, 4, 5, 6, 9, 1, 2, 'España', 'Madrid', AlimentGroup.fish);
const albahaca = new Aliment('Albahaca', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'España', 'Barcelona', AlimentGroup.legumes);
const manzana = new Aliment('manzana', 1, 14, 1.34, 0.2, 15, 1.2, 3, 5, 2, 'España', 'Barcelona', AlimentGroup.fruit);
const avena = new Aliment('avena', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.cereal);
const donuts = new Aliment('donuts', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.milk_derivate);
const bizcocho = new Aliment('bizcocho', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.milk_derivate);
const lechuga = new Aliment('lechuga', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.vegetables);
const pasta = new Aliment('pasta', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.cereal);
const cereza = new Aliment('ceraza', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.fruit);
const carne_cordero = new Aliment('carne de cordero', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.meat);
const nata = new Aliment('avena', 2, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.milk_derivate);
const pan_rallado = new Aliment('pan rallado', 1, 11, 1.2, 0.8, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.cereal);
const pasta_integral = new Aliment('pasta integral', 1, 11, 2.2, 0.5, 2, 2, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.cereal);
const arroz_integral = new Aliment('arroz integral', 1, 11, 1.9, 0.5, 2, 9, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.seeds);
const carne_conejo = new Aliment('carne de conejo', 1, 11, 1.2, 0.2, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.meat);
const gofio = new Aliment('Gofio Canario', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Icod de los vinos', AlimentGroup.cereal);
const harina_maiz = new Aliment('Harina de maiz', 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, 'Venezuela', 'Caracas', AlimentGroup.cereal);
const churros = new Aliment('Churros', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Santa Cruz', AlimentGroup.cereal);
const batido_fresa = new Aliment('Batido de fresa', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Santa cruz', AlimentGroup.fruit);
const batido_chocolate = new Aliment('Batido de chocolate', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Santa cruz', AlimentGroup.milk_derivate);
const batido_vainilla = new Aliment('Batido de vainilla', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Santa cruz', AlimentGroup.milk_derivate);
const yogur_griego = new Aliment('Yogur griego natural', 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, 'Sabadell', 'Barcelona', AlimentGroup.milk_derivate);
const huevo_gallina = new Aliment('Huevo de gallina', 2, 4, 12, 20.5, 105, 20.6, 0.73, 1.8, 73.9, 'Tenerife', 'Santa Cruz', AlimentGroup.eggs);
const base_pizza = new Aliment('Base de Pizza', 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, 'Italia', 'Roma', AlimentGroup.cereal);
const aceite_soja = new Aliment('Aceite de soja', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.vegetables);
const aceite_olivo = new Aliment('Aceite de Olivo', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.vegetables);
const manteca_cerdo = new Aliment('Manteca de cerdo', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.meat);

const ingredientes = new Map<Aliment, number>();

ingredientes.clear();
ingredientes.set(queso_gouda, 10);
ingredientes.set(queso_mozarella, 10);
ingredientes.set(queso_feta, 10);
ingredientes.set(pan_pita, 5);
const plato_tablaquesos = new Plate('Tabla de quesos', ingredientes, Category.entree);

ingredientes.clear();
ingredientes.set(pan_pita, 10);
ingredientes.set(aceite_olivo, 5);
ingredientes.set(queso_feta, 12);
const plato_pitaqueso = new Plate('Pita de oliva y feta', ingredientes, Category.entree);

ingredientes.clear();
ingredientes.set(harina_maiz, 10);

ingredientes.set(queso_gouda, 10);
const plato_arepitas = new Plate('Arepitas con queso', ingredientes, Category.entree);

ingredientes.clear();
ingredientes.set(lechuga, 20);
ingredientes.set(tomate, 10);
ingredientes.set(queso_feta, 13);
ingredientes.set(Aguacate, 3);
ingredientes.set(aceite_olivo, 5);
const plato_ensalada = new Plate('Ensalada Di Monte', ingredientes, Category.entree);

ingredientes.clear();
ingredientes.set(croquetas_cangrejo, 20);
const plato_croquetas = new Plate('Croquetas de cangrejo', ingredientes, Category.entree);

ingredientes.clear();
ingredientes.set(pollo, 100);
ingredientes.set(patatas_fritas, 90);
ingredientes.set(zanahoria, 80);
const plato_tablajaponesa = new Plate('Tabla Japonesa', ingredientes, Category.maincourse);

ingredientes.clear();
ingredientes.set(Salmon, 15);
ingredientes.set(croquetas_cangrejo, 25);
ingredientes.set(Anguila, 60);
ingredientes.set(Aguacate, 60);
ingredientes.set(Arroz, 200);
const plato_sushi = new Plate('Sushi de mixto', ingredientes, Category.maincourse);

ingredientes.clear();
ingredientes.set(carne_cordero, 100);
ingredientes.set(pollo, 100);
ingredientes.set(lechuga, 60);
ingredientes.set(tomate, 60);
ingredientes.set(pan_pita, 100);
const plato_kebabmixto = new Plate('Kebab mixto', ingredientes, Category.maincourse);

ingredientes.clear();
ingredientes.set(base_pizza, 200);
ingredientes.set(tomate, 100);
ingredientes.set(queso_mozarella, 100);
ingredientes.set(pollo, 200);
ingredientes.set(Tocino, 100);
const plato_pizza = new Plate('Pizza di DSI', ingredientes, Category.maincourse);

ingredientes.clear();
ingredientes.set(carne_conejo, 100);
ingredientes.set(tomate, 100);
ingredientes.set(lechuga, 10);
ingredientes.set(patatas_fritas, 200);
const plato_conejopatatas = new Plate('Conejo con patatas y ensalada', ingredientes, Category.maincourse);

ingredientes.clear();
ingredientes.set(croquetas_cangrejo, 200);
ingredientes.set(Arroz_salvaje, 300);
const plato_cangejosalvaje = new Plate('Cangrejo Salvaje', ingredientes, Category.secondcourse);

ingredientes.clear();
ingredientes.set(harina_maiz, 200);
ingredientes.set(carne_cordero, 300);
const plato_arepacordero = new Plate('Arepa de cordero', ingredientes, Category.secondcourse);

ingredientes.clear();
ingredientes.set(harina_maiz, 200);
ingredientes.set(carne_conejo, 300);
const plato_arepaconejo = new Plate('Arepa de conejo', ingredientes, Category.secondcourse);

ingredientes.clear();
ingredientes.set(macarron, 200);
ingredientes.set(queso_gouda, 300);
const plato_macarronesqueso = new Plate('Macarrones con queso', ingredientes, Category.secondcourse);

ingredientes.clear();
ingredientes.set(pasta, 200);
ingredientes.set(atun, 300);
ingredientes.set(tomate, 100);
const plato_pastatuna = new Plate('Pastatuna', ingredientes, Category.secondcourse);

ingredientes.clear();
ingredientes.set(arroz_leche, 100);
const plato_arrozleche = new Plate('Arroz con leche', ingredientes, Category.dessert);

ingredientes.clear();
ingredientes.set(donuts, 30);
ingredientes.set(manzana, 9);
const plato_donutsmanzana = new Plate('Donuts de Manzana', ingredientes, Category.dessert);

ingredientes.clear();
ingredientes.set(churros, 100);
ingredientes.set(batido_chocolate, 10);
const plato_churroschocolate = new Plate('Churros con Chocolate', ingredientes, Category.dessert);

ingredientes.clear();
ingredientes.set(batido_fresa, 100);
ingredientes.set(batido_chocolate, 100);
ingredientes.set(batido_vainilla, 100);
const plato_heladosabores = new Plate('Helado 3 sabores', ingredientes, Category.dessert);

ingredientes.clear();
ingredientes.set(batido_vainilla, 100);
ingredientes.set(huevo_gallina, 159);
ingredientes.set(avena, 120);
ingredientes.set(bizcocho, 30);
const plato_tartavegana = new Plate('Tarta Vegana', ingredientes, Category.dessert);

const menu_predefinido1 = new LocalMenu('Almuerzo de poseidon');
console.log('Menu 1 = ' + menu_predefinido1.setMenu([plato_croquetas, plato_sushi, plato_arrozleche, plato_pastatuna]));


const menu_predefinido2 = new LocalMenu('Almuerzo de zeus');
console.log('Menu 2 = ' + menu_predefinido2.setMenu([plato_ensalada, plato_tablajaponesa, plato_churroschocolate, plato_arepacordero]));

const menu_predefinido3 = new LocalMenu('Almuerzo de ejemplo');
console.log('Menu 3 = ' + menu_predefinido3.setMenu([plato_ensalada, plato_arepacordero, plato_croquetas]));

const menu_personalizado1 = new PerzonalisedMenu('Pedido perzonalizado');
console.log('Menu perso = ' + menu_personalizado1.setMenu([plato_ensalada, plato_arepacordero, plato_croquetas]));

const menus: LocalMenu[] = [];
menus.push(menu_predefinido1);
menus.push(menu_predefinido2);
menus.push(menu_predefinido3);

const platos: Plate[] = [];
platos.push(plato_pitaqueso);
platos.push(plato_croquetas);
platos.push(plato_ensalada);
platos.push(plato_arepitas);
platos.push(plato_tablajaponesa);
platos.push(plato_sushi);
platos.push(plato_kebabmixto);
platos.push(plato_pizza);
platos.push(plato_conejopatatas);
platos.push(plato_arepaconejo);
platos.push(plato_arepacordero);
platos.push(plato_macarronesqueso);
platos.push(plato_cangejosalvaje);
platos.push(plato_pastatuna);
platos.push(plato_arrozleche);
platos.push(plato_donutsmanzana);
platos.push(plato_churroschocolate);
platos.push(plato_tartavegana);
platos.push(plato_heladosabores);

const carta = new Carte('Restaurant Puchini');
carta.addMenus(menus);
carta.addPlates(platos);

console.log(carta.print());

const order1 = new Order(123456);
order1.addMenu(menus);
order1.addPlates(platos);
console.log(order1.print());
