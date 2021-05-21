/* eslint-disable camelcase */
/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Aliment, AlimentGroup} from '../../src/aliment/aliment';


describe(`Aliment Test`, () => {
  const pollo = new Aliment('Pollo', 10, 20, 12, 0, 32, 0, 0, 0, 70.3, 'Tenerife', 'Santa Cruz', AlimentGroup.meat);
  //   const patatas_fritas = new Aliment('Patatas fritas', 3, 6.8, 20, 66.8, 472, 65.8, 0.9, 1, 5.9, 'Tenerife', 'Santa Cruz', AlimentGroup.vegetables);
  //   const zanahoria = new Aliment('Zanahoria', 2, 0.9, 10, 7.3, 40, 0, 7.3, 2.9, 88.7, 'Tenerife', 'Santa Cruz', AlimentGroup.vegetables);
  //   const arroz_leche = new Aliment('Arroz con leche', 2, 3, 20, 20.2, 110, 3.9, 16.3, 0.02, 74.9, 'Tenerife', 'Santa cruz', AlimentGroup.milk_derivate);

  it('Aliment must have a name attribute', () => {
    expect(pollo).to.ownProperty('name');
  });

  it('Aliment must have a price attribute', () => {
    expect(pollo).to.ownProperty('price');
  });

  it('Aliment must have a locality attribute', () => {
    expect(pollo).to.ownProperty('locality');
  });

  it('Aliment must have a city attribute', () => {
    expect(pollo).to.ownProperty('city');
  });

  it('Aliment must have a city attribute', () => {
    expect(pollo).to.ownProperty('city');
  });

  it('Aliment must have a protein attribute', () => {
    expect(pollo).to.ownProperty('protein');
  });

  it('Aliment must have a fats attribute', () => {
    expect(pollo).to.ownProperty('fats');
  });

  it('Aliment must have a calories attribute', () => {
    expect(pollo).to.ownProperty('calories');
  });

  it('Aliment must have a starch attribute', () => {
    expect(pollo).to.ownProperty('starch');
  });

  it('Aliment must have a sugars attribute', () => {
    expect(pollo).to.ownProperty('sugars');
  });

  it('Aliment must have a fiber attribute', () => {
    expect(pollo).to.ownProperty('fiber');
  });

  it('Aliment must have a water attribute', () => {
    expect(pollo).to.ownProperty('water');
  });


  it('Aliment must return its name', () => {
    expect(pollo.getName()).to.equal('Pollo');
  });

  it('Aliment must return its protein', () => {
    expect(pollo.getProtein()).to.be.equal(10);
  });

  it('Aliment must return its fats', () => {
    expect(pollo.getFats()).to.be.equal(20);
  });

  it('Aliment must return its carbohydrates', () => {
    expect(pollo.getCarbohydrates()).to.be.equal(12);
  });

  it('Aliment must return its calories', () => {
    expect(pollo.getCalories()).to.be.equal(0);
  });

  it('Aliment must return its starch', () => {
    expect(pollo.getStarch()).to.be.equal(32);
  });

  it('Aliment must return its sugars', () => {
    expect(pollo.getSugars()).to.be.equal(0);
  });

  it('Aliment must return its fiber', () => {
    expect(pollo.getFiber()).to.be.equal(0);
  });

  it('Aliment must return its water', () => {
    expect(pollo.getWater()).to.be.equal(0);
  });

  it('Aliment must return its price', () => {
    expect(pollo.getPriceOfAliment()).to.be.equal(70.3);
  });

  it('Aliment must return its city', () => {
    expect(pollo.getCity()).to.be.equal('Tenerife');
  });

  it('Aliment must return its locality', () => {
    expect(pollo.getLocality()).to.be.equal('Santa Cruz');
  });

  it('Aliment must return its aliment_group', () => {
    expect(pollo.getAlimentGroup()).to.be.equal(AlimentGroup.meat);
  });
});
