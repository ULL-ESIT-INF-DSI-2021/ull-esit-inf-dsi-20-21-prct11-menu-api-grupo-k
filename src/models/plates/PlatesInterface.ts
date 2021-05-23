/* eslint-disable max-len */
import {Document} from 'mongoose';
import {Aliment, AlimentGroup} from '../../class/aliment/aliment';
import {NutritionalComposition} from '../../class/interfaces/nutritional_composition';
import {Category} from '../../class/plate/plate';

/**
 * interfaz de platos
 */
export interface PlatesInterface extends Document, NutritionalComposition {
    name: string,
    protein: number,
    fats: number,
    carbohydrates: number,
    calories: number,
    starch: number,
    sugars: number,
    fiber: number,
    water: number,
    price: number,
    predominantAlimentGroup: [AlimentGroup, number],
    ingredients: Map<Aliment, number>,
    category: Category
  }
