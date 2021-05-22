/* eslint-disable camelcase */
/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Aliment, AlimentGroup} from '../../src/aliment/aliment';
import {LocalMenu} from '../../src/menu/local_menu';
import {Plate, Category} from '../../src/plate/plate';


describe(`Menu Tests`, () => {
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
  const Tocino = new Aliment('Tocino', 6.50, 8.4, 85.8, 0, 55.5, 0, 0, 0, 12.5, 'Sabadell', 'Barcelona', AlimentGroup.meat);
  const Arroz = new Aliment('Arroz Blanco', 0.25, 7, 0.12, 86, 4, 85.8, 0.2, 0.2, 5.9, 'Miramar', 'Santa Cruz', AlimentGroup.seeds);
  const Anguila = new Aliment('Anguila', 6.50, 16.3, 32, 0, 25, 0, 0, 0, 68.2, 'Wuhan', 'China', AlimentGroup.fish);
  const Aguacate = new Aliment('Aguacate', 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, 'Sabadell', 'Barcelona', AlimentGroup.vegetables);
  const Salmon = new Aliment('Salmon', 9, 18.4, 12, 0, 11, 0, 0, 0, 69.6, 'Miramar', 'Santa Cruz', AlimentGroup.fish);
  const tomate = new Aliment('Tomate', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'Escocia', 'Escocia', AlimentGroup.vegetables);
  const macarron = new Aliment('Macarron', 2, 2, 3, 4, 5, 6, 9, 1, 2, 'España', 'Madrid', AlimentGroup.cereal);
  const atun = new Aliment('Atun', 5, 9, 3, 4, 5, 6, 9, 1, 2, 'España', 'Madrid', AlimentGroup.fish);
  const manzana = new Aliment('manzana', 1, 14, 1.34, 0.2, 15, 1.2, 3, 5, 2, 'España', 'Barcelona', AlimentGroup.fruit);
  const avena = new Aliment('avena', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.cereal);
  const donuts = new Aliment('donuts', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.milk_derivate);
  const bizcocho = new Aliment('bizcocho', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.milk_derivate);
  const lechuga = new Aliment('lechuga', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.vegetables);
  const pasta = new Aliment('pasta', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.cereal);
  const carne_cordero = new Aliment('carne de cordero', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.meat);
  const carne_conejo = new Aliment('carne de conejo', 1, 11, 1.2, 0.2, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.meat);
  const harina_maiz = new Aliment('Harina de maiz', 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, 'Venezuela', 'Caracas', AlimentGroup.cereal);
  const churros = new Aliment('Churros', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Santa Cruz', AlimentGroup.cereal);
  const batido_fresa = new Aliment('Batido de fresa', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Santa cruz', AlimentGroup.fruit);
  const batido_chocolate = new Aliment('Batido de chocolate', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Santa cruz', AlimentGroup.milk_derivate);
  const batido_vainilla = new Aliment('Batido de vainilla', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', 'Santa cruz', AlimentGroup.milk_derivate);
  const huevo_gallina = new Aliment('Huevo de gallina', 2, 4, 12, 20.5, 105, 20.6, 0.73, 1.8, 73.9, 'Tenerife', 'Santa Cruz', AlimentGroup.eggs);
  const base_pizza = new Aliment('Base de Pizza', 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, 'Italia', 'Roma', AlimentGroup.cereal);
  const aceite_olivo = new Aliment('Aceite de Olivo', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.vegetables);

  const ingredientes = new Map<Aliment, number>();

  ingredientes.clear();
  ingredientes.set(queso_gouda, 10);
  ingredientes.set(queso_mozarella, 10);
  ingredientes.set(queso_feta, 10);
  ingredientes.set(pan_pita, 5);

  ingredientes.clear();
  ingredientes.set(pan_pita, 10);
  ingredientes.set(aceite_olivo, 5);
  ingredientes.set(queso_feta, 12);

  ingredientes.clear();
  ingredientes.set(harina_maiz, 10);

  ingredientes.set(queso_gouda, 10);

  ingredientes.clear();
  ingredientes.set(lechuga, 20);
  ingredientes.set(tomate, 10);
  ingredientes.set(queso_feta, 13);
  ingredientes.set(Aguacate, 3);
  ingredientes.set(aceite_olivo, 5);

  ingredientes.clear();
  ingredientes.set(croquetas_cangrejo, 20);
  const plato_croquetas = new Plate('Croquetas de cangrejo', ingredientes, Category.entree);

  ingredientes.clear();
  ingredientes.set(pollo, 100);
  ingredientes.set(patatas_fritas, 90);
  ingredientes.set(zanahoria, 80);

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

  ingredientes.clear();
  ingredientes.set(base_pizza, 200);
  ingredientes.set(tomate, 100);
  ingredientes.set(queso_mozarella, 100);
  ingredientes.set(pollo, 200);
  ingredientes.set(Tocino, 100);

  ingredientes.clear();
  ingredientes.set(carne_conejo, 100);
  ingredientes.set(tomate, 100);
  ingredientes.set(lechuga, 10);
  ingredientes.set(patatas_fritas, 200);

  ingredientes.clear();
  ingredientes.set(croquetas_cangrejo, 200);
  ingredientes.set(Arroz_salvaje, 300);

  ingredientes.clear();
  ingredientes.set(harina_maiz, 200);
  ingredientes.set(carne_cordero, 300);

  ingredientes.clear();
  ingredientes.set(harina_maiz, 200);
  ingredientes.set(carne_conejo, 300);

  ingredientes.clear();
  ingredientes.set(macarron, 200);
  ingredientes.set(queso_gouda, 300);

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

  ingredientes.clear();
  ingredientes.set(churros, 100);
  ingredientes.set(batido_chocolate, 10);

  ingredientes.clear();
  ingredientes.set(batido_fresa, 100);
  ingredientes.set(batido_chocolate, 100);
  ingredientes.set(batido_vainilla, 100);

  ingredientes.clear();
  ingredientes.set(batido_vainilla, 100);
  ingredientes.set(huevo_gallina, 159);
  ingredientes.set(avena, 120);
  ingredientes.set(bizcocho, 30);

  const menu_predefinido1 = new LocalMenu('Almuerzo de poseidon');
  console.log('Menu 1 = ' + menu_predefinido1.setMenu([plato_croquetas, plato_sushi, plato_arrozleche, plato_pastatuna]));


  it('menu_predefinido1.getName() returns value Maki Sushi', () => {
    expect(menu_predefinido1.getName()).to.equal('Almuerzo de poseidon');
  });
  it('menu_predefinido1.getPrice() returns value 9.55', () => {
    expect(menu_predefinido1.getPrice()).to.equal(466.4);
  });
  it('menu_predefinido1.getPredominantAlimentGroup() returns value ', () => {
    expect(menu_predefinido1.getAlimentGroupList()).to.deep.equal([['Pescado', 20], ['Semillas', 200], ['Leche-Derevidaos', 100], ['Pescado', 300]]);
  });
  it('menu_predefinido1.getCalories() returns value 130.60000000000002', () => {
    expect(menu_predefinido1.getCalories()).to.equal(130.60000000000002);
  });
  it('menu_predefinido1.getCarbohydrates() returns value 84.4', () => {
    expect(menu_predefinido1.getCarbohydrates()).to.equal(113.82000000000001);
  });
  it('menu_predefinido1.getFats() returns value 84.4', () => {
    expect(menu_predefinido1.getFats()).to.equal(84.4);
  });
  it('menu_predefinido1.getFiber() returns value 44', () => {
    expect(menu_predefinido1.getFiber()).to.equal(44);
  });
  it('menu_predefinido1.getProtein() returns value 34.55', () => {
    expect(menu_predefinido1.getProtein()).to.equal(34.55);
  });
  it('menu_predefinido1.getStarch() returns value 423', () => {
    expect(menu_predefinido1.getStarch()).to.equal(423);
  });
  it('menu_predefinido1.getSugars() returns value 108.9', () => {
    expect(menu_predefinido1.getSugars()).to.equal(108.9);
  });
  it('menu_predefinido1.getWater() returns value 12.3', () => {
    expect(menu_predefinido1.getWater()).to.equal(12.3);
  });
});

