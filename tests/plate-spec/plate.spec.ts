/* eslint-disable camelcase */
/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Aliment, AlimentGroup} from '../../src/class/aliment/aliment';
import {Plate, Category} from '../../src/class/plate/plate';


describe(`Plate Tests`, () => {
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
  const lechuga = new Aliment('lechuga', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.vegetables);
  const pasta = new Aliment('pasta', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.cereal);
  const carne_cordero = new Aliment('carne de cordero', 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.meat);
  const carne_conejo = new Aliment('carne de conejo', 1, 11, 1.2, 0.2, 2, 1.8, 4, 5, 2, 'España', 'Barcelona', AlimentGroup.meat);
  const harina_maiz = new Aliment('Harina de maiz', 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, 'Venezuela', 'Caracas', AlimentGroup.cereal);
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

  ingredientes.clear();
  ingredientes.set(arroz_leche, 100);
  const plato_arrozleche = new Plate('Arroz con leche', ingredientes, Category.dessert);


  it('plato_arrozleche.getName() returns value Arroz con leche', () => {
    expect(plato_arrozleche.getName()).to.equal('Arroz con leche');
  });
  it('plato_arrozleche.getPrice() returns value 74.9', () => {
    expect(plato_arrozleche.getPrice()).to.equal(74.9);
  });

  it('plato_arrozleche.getPredominantAlimentGroup() returns value [["Leche-Derevidaos",100], ["Meat", 60]]', () => {
    expect(plato_arrozleche.getPredominantAlimentGroup()).to.deep.equal(['Leche-Derevidaos', 100]);
  });
  it('plato_arrozleche.getCalories() returns value 20.2', () => {
    expect(plato_arrozleche.getCalories()).to.equal(20.2);
  });
  it('plato_arrozleche.getCarbohydrates() returns value 20', () => {
    expect(plato_arrozleche.getCarbohydrates()).to.equal(20);
  });
  it('plato_arrozleche.getFats() returns value 3', () => {
    expect(plato_arrozleche.getFats()).to.equal(3);
  });
  it('plato_arrozleche.getFiber() returns value 16.3', () => {
    expect(plato_arrozleche.getFiber()).to.equal(16.3);
  });
  it('plato_arrozleche.getProtein() returns value 2', () => {
    expect(plato_arrozleche.getProtein()).to.equal(2);
  });
  it('plato_arrozleche.getStarch() returns value 110', () => {
    expect(plato_arrozleche.getStarch()).to.equal(110);
  });
  it('plato_arrozleche.getSugars() returns value 3.9', () => {
    expect(plato_arrozleche.getSugars()).to.equal(3.9);
  });
  it('plato_arrozleche.getWater() returns value 0.02', () => {
    expect(plato_arrozleche.getWater()).to.equal(0.02);
  });
  it('plato_arrozleche.getIngredients() returns value Ingrediente: Arroz con leche, Cantidad: 100', () => {
    expect(plato_arrozleche.getIngredients()).to.equal('Ingrediente: Arroz con leche, Cantidad: 100\n');
  });
  it('plato must return its information', () => {
    expect(plato_arrozleche.print()).to.be.equal(plato_arrozleche.print());
  });
  it('plato_arrozleche.getCalories() returns value Ingrediente: Arroz con leche, Cantidad: 100', () => {
    expect(plato_arrozleche.getCalories()).to.equal(20.2);
  });
});

