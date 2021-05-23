/* eslint-disable camelcase */
/* eslint-disable max-len */
import {AlimentGroup} from '../aliment/aliment';
import {NutritionalComposition} from '../interfaces/nutritional_composition';
import {Plate} from '../plate/plate';

/**
 * representación de la clase menu
 */
export abstract class Menu implements NutritionalComposition {
  protected plates: Plate[] = [];
  private price: number = 0;
  public protein: number = 0;
  public fats: number = 0;
  public carbohydrates: number = 0;
  public calories: number = 0;
  public starch: number = 0;
  public sugars: number = 0;
  public fiber: number = 0;
  public water:number = 0;
  private alimentGroupList : [AlimentGroup, number][] = [];
  public verify_menu: boolean = false;

  constructor(private name: string) {}

  /**
   * Introduce los platos para un menu
   * @param plates booleano si el menu es válido (posee al menos 3 categorías de platos)
   */
  abstract setMenu(plates: Plate[]): Boolean ;


  /**
     * Metodo que calcula el precio total del menu en base a los platos que lo compone.
     */
  protected calculatePrice() {
    this.price = 0;
    this.plates.forEach((key) => {
      this.price += key.getPrice();
    });
  }

  /**
   * Metodo que calcula la composicion nutricional del menu en base a los platos que lo conforman.
   */
  protected calculateNutritionalComposition() {
    this.calories = 0;
    this.protein = 0;
    this.fats = 0;
    this.carbohydrates = 0;
    this.starch = 0;
    this.sugars = 0;
    this.fiber = 0;
    this.water = 0;
    this.plates.forEach((key) => {
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
   * Metodo que obtiene el alimento predominante de cada plato en el menu.
   */
  protected identifyAlimentGroupList() {
    this.alimentGroupList = [];
    this.plates.forEach((key) => {
      this.alimentGroupList.push(key.getPredominantAlimentGroup());
    });
  }

  getName() {
    return this.name;
  }

  /**
   * Metodo que retorna el numero de calorias del menu.
   * @returns caloras totales del menu.
   */
  getCalories():number {
    return this.calories;
  }

  /**
   * Metodo que retorna el numero de proteinas del menu.
   * @returns Proteinas totales del menu.
   */
  getProtein(): number {
    return this.protein;
  }

  /**
   * Metodo que retorna el numero de grasas del menu.
   * @returns Grasas totales del menu.
   */
  getFats():number {
    return this.fats;
  }

  /**
   * Metodo que retorna el numero de carbohidratos del menu.
   * @returns Cabohidratos totales del menu.
   */
  getCarbohydrates(): number {
    return this.carbohydrates;
  }

  /**
   * Metodo que retorna el numero de almidon del menu.
   * @returns Almidon total del menu
   */
  getStarch():number {
    return this.starch;
  }

  /**
   * Metodo que retorna el numero de azucares del menu.
   * @returns Azucares totales del menu.
   */
  getSugars():number {
    return this.sugars;
  }

  /**
   * Metodo que retorna el numero de fibra del menu.
   * @returns Fibra total del menu
   */
  getFiber(): number {
    return this.fiber;
  }

  /**
   * Metodo que retorna el numero de agua del menu.
   * @returns Cantidad de agua total del mnu.
   */
  getWater(): number {
    return this.water;
  }

  /**
   * Metodo que retorna el precio del menu.
   * @returns Precio total del menu.
   */
  getPrice() : number {
    return this.price;
  }

  /**
   * Metodo que retorna todos los platos que conforman el menu.
   * @returns Platos que conforman el menu.
   */
  getPlates(): Plate[] {
    return this.plates;
  }

  /**
   * Metodo que devuelve el grupo de alimento predominante por cada plato que conforma el menu.
   * @returns Alimento predominante de cada plato.
   */
  getAlimentGroupList() : [AlimentGroup, number][] {
    return this.alimentGroupList;
  }

  /**
   * Metodo que devuelve la informacion del menu.
   * @returns
   */
  print() : string {
    let output = '';
    output += 'Nombre: ' + this.name + '\n';
    output += 'Precio: ' + this.getPrice() + '\n';
    output += 'Platos: \n';
    this.plates.forEach((element) => {
      output += 'Nombre : ' + element.getName() + '\n Precio : ' + element.getPrice() + '\n';
    }); + '\n';
    output += 'Composicion Nutricional: ' + '\n';
    output += 'Calorias: ' + this.getCalories() + '\n';
    output += 'Proteinas: ' + this.getProtein() + '\n';
    output += 'Grasas: ' + this.getFats() + '\n';
    output += 'Carbohidratos: ' + this.getCarbohydrates() + '\n';
    output += 'Almidon: ' + this.getStarch() + '\n';
    output += 'Azucar: ' + this.getSugars() + '\n';
    output += 'Fibra: ' + this.getFiber() + '\n';
    output += 'Agua: ' + this.getWater() + '\n';
    output += 'Grupo de alimento predominante: ' + this.getAlimentGroupList() + '\n';
    return output;
  }
}
