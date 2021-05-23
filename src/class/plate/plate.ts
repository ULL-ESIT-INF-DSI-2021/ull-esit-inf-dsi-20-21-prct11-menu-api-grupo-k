/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Aliment, AlimentGroup} from '../aliment/aliment';
import {NutritionalComposition} from '../interfaces/nutritional_composition';

export enum Category {entree = 'Entrante', maincourse = 'Principal', secondcourse = 'Secundario', dessert = 'Postre'}

/**
 * Clase abstracta para representar platos
 */
export class Plate implements NutritionalComposition {
   [x: string]: any;
   /**
     * Variables para almacenar la composicion nutricional de cada plato
     */
      public calories: number = 0;
      public protein: number = 0;
      public fats: number = 0;
      public carbohydrates: number = 0;
      public starch: number = 0;
      public sugars: number = 0;
      public fiber: number = 0;
      public water: number = 0;
      private price: number = 0;
      private predominantAlimentGroup: [AlimentGroup, number] = [AlimentGroup.cereal, 0];
      /**
       * Constructor de la clase plate
       * @param name Nombre del plato
       * @param ingredients Ingredientes del plato
       */
      constructor(private name: string,
      private ingredients: Map<Aliment, number>, private category: Category) {
        this.calculatePrice();
        this.identifyPredominantAlimentGroup();
        this.calculateNutritionalComposition();
      }

      /**
       * Funcion para calcular el precio total del plato segun el precio de cada alimento
       */
      private calculatePrice() {
        this.ingredients.forEach((value, key) => {
          this.price += key.getPriceOfAliment();
        });
      }

      /**
       * Funcion para identificar el grupo de alimentos predominante en el plato
       */
      private identifyPredominantAlimentGroup() {
        const max: Map<AlimentGroup, number> = new Map();
        this.ingredients.forEach((value, key) => {
          if (max.has(key.getAlimentGroup())) {
            const sum = max.get(key.getAlimentGroup());
            max.set(key.getAlimentGroup(), sum == undefined? 0: sum + value);
          } else {
            max.set(key.getAlimentGroup(), value);
          }
        });
        max.forEach((value, key) => {
          if (value == Math.max(...max.values())) {
            this.predominantAlimentGroup = [key, value];
          }
        });
      }

      /**
       * Funcion para calcular la composicion nutricional total del plato
       */
      private calculateNutritionalComposition() {
        this.ingredients.forEach((value, key) => {
          this.calories += key.getCalories();
          this.protein += key.getProtein();
          this.fats += key.getFats();
          this.carbohydrates += key.getCarbohydrates();
          this.starch += key.getStarch();
          this.sugars += key.getSugars();
          this.fiber += key.getFiber();
          this.water += key.getWater();
        });
      }

      /**
       * Funcion para imprimir todas las caracteristicas de un plato
       * @returns String con la estructura del plato
       */
      print(): string {
        let output = '';
        output += 'Nombre: ' + this.getName() + '\n';
        output += 'Precio: ' + this.getPrice() + '\n';
        output += 'Ingredientes: \n' + this.getIngredients() + '\n';
        output += 'Composicion Nutricional: ' + '\n';
        output += 'Calorias: ' + this.getCalories() + '\n';
        output += 'Proteinas: ' + this.getProtein() + '\n';
        output += 'Grasas: ' + this.getFats() + '\n';
        output += 'Carbohidratos: ' + this.getCarbohydrates() + '\n';
        output += 'Almidon: ' + this.getStarch() + '\n';
        output += 'Azucar: ' + this.getSugars() + '\n';
        output += 'Fibra: ' + this.getFiber() + '\n';
        output += 'Agua: ' + this.getWater() + '\n';
        output += 'Grupo de alimento predominante: ' + this.getPredominantAlimentGroup() + '\n';
        return output;
      }
      /**
       * Get para el nombre del plato
       * @returns Nombre del plato
       */
      getName(): string {
        return this.name;
      }
      /**
       * Get para el precio del plato
       * @returns Precio del plato
       */
      getPrice(): number {
        return this.price;
      }
      /**
       * Get del grupo alimenticio del plato
       * @returns Grupo alimenticio predominante del plato
       */
      getPredominantAlimentGroup(): [AlimentGroup, number] {
        return this.predominantAlimentGroup;
      }

      /**
       * Get de la categoria del plato, entrada, primer plato, segundo plato o postre.
       * @returns categoria del plato, entrada, primer plato, segundo plato o postre.
       */
      getCategory() {
        return this.category;
      }

      /**
       * Get para los ingredientes del plato
       * @returns String con los ingredientes del plato
       */
      getIngredients(): string {
        let output = '';
        this.ingredients.forEach((value, key) => {
          output += 'Ingrediente: ' + key.getName() + ', Cantidad: ' + value + '\n';
        });
        return output;
      }
      /**
       * Get de las calorias del plato
       * @returns Calorias del plato
       */
      getCalories(): number {
        return this.calories;
      }
      /**
       * Get de las proteinas del plato
       * @returns Proteinas del plato
       */
      getProtein(): number {
        return this.protein;
      }
      /**
       * Get para las grasas del plato
       * @returns Grasas del plato
       */
      getFats(): number {
        return this.fats;
      }
      /**
       * Get para los carbohidratos del plato
       * @returns Carbohidratos del plato
       */
      getCarbohydrates(): number {
        return this.carbohydrates;
      }
      /**
       * Get para el almidon del plato
       * @returns Almidon del plato
       */
      getStarch(): number {
        return this.starch;
      }
      /**
       * Get para el azucar del plato
       * @returns Azucar del plato
       */
      getSugars(): number {
        return this.sugars;
      }
      /**
       * Get para la fibra del plato
       * @returns Fibra del plato
       */
      getFiber(): number {
        return this.fiber;
      }
      /**
       * Get del agua del plato
       * @returns Agua del plato
       */
      getWater(): number {
        return this.water;
      }
}
