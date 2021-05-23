/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {NutritionalComposition} from '../interfaces/nutritional_composition';

/**
 * Tipo de alimento
 */
export enum AlimentGroup {
    meat = 'Carne',
    fish = 'Pescado',
    eggs = 'Huevos',
    tofu = 'Tofu',
    seeds = 'Semillas',
    nuts = 'Frutos-Secos',
    legumes = 'Legumbres',
    vegetables = 'Vegetales-Hortalizas',
    milk_derivate = 'Leche-Derevidaos',
    cereal = 'Cereal',
    fruit = 'Fruta'
}

/**
 * Representación de alimento, con su composición nutricional, ciudad y precio de venta
 */
export class Aliment implements NutritionalComposition {
  constructor(private name: string,
        public readonly protein: number,
        public readonly fats: number,
        public readonly carbohydrates: number,
        public readonly calories: number,
        public readonly starch: number,
        public readonly sugars: number,
        public readonly fiber: number,
        public readonly water: number,
        private price: number,
        private city: string,
        private locality: string,
        private aliment_group: AlimentGroup) {
  }

  /**
   * Forma en la que se muestran los alimentos
   * @returns Forma en la que se muestran los alimentos
   */
  print(): string {
    let output = '';
    output += 'Nombre: ' + this.getName() + '\n';
    output += 'Precio: ' + this.getPriceOfAliment() + '\n';
    output += 'Calorias: ' + this.getCalories() + '\n';
    output += 'Proteinas: ' + this.getProtein() + '\n';
    output += 'Grasas: ' + this.getFats() + '\n';
    output += 'Carbohidratos: ' + this.getCarbohydrates() + '\n';
    output += 'Almidon: ' + this.getStarch() + '\n';
    output += 'Azucar: ' + this.getSugars() + '\n';
    output += 'Fibra: ' + this.getFiber() + '\n';
    output += 'Agua: ' + this.getWater() + '\n';
    output += 'Localidad: ' + this.getLocality() + '\n';
    output += 'Ciudad: ' + this.getCity() + '\n';
    output += 'Grupo Alimenticio: ' + this.getAlimentGroup();
    return output;
  }

  /**
   * @returns Calorias del alimento
   */
  getCalories() {
    return this.calories;
  }

  /**
       *
       * @returns el valor numerico de proteinas que tiene el alimento.
       */
  getProtein() {
    return this.protein;
  }

  /**
       *
       * @returns cantidad de lipido o grasa que contiene el alimento.
       */
  getFats() {
    return this.fats;
  }

  /**
       *
       * @returns los carbohidratos del alimento.
       */
  getCarbohydrates() {
    return this.carbohydrates;
  }

  /**
       *
       * @returns la cantidad de almidon del alimento.
       */
  getStarch() {
    return this.starch;
  }

  /**
       *
       * @returns la cantidad de azucar que tiene el alimento.
       */
  getSugars() {
    return this.sugars;
  }

  /**
       *
       * @returns la cantidad de fibra de un alimento.
       */
  getFiber() {
    return this.fiber;
  }

  /**
       *
       * @returns la cantidad de agua que tiene un alimento.
       */
  getWater() {
    return this.water;
  }

  /**
       *
       * @returns el nombre la ciudad de la cual es el alimento
       */
  getCity() {
    return this.city;
  }

  /**
       *
       * @returns la localidad del alimento.
       */
  getLocality() {
    return this.locality;
  }

  /**
       *
       * @returns el nombre del alimento.
       */
  getName() {
    return this.name;
  }
  /**
      *
      * @returns el precio del alimento
      */
  getPriceOfAliment() {
    return this.price;
  }

  /**
   *
   * @returns Categoria en la cual pertenece el alimeto
   */
  getAlimentGroup() {
    return this.aliment_group;
  }
}
