import {Document} from 'mongoose';
import { AlimentGroup } from '../aliment/aliment';
import { NutritionalComposition } from '../interfaces/nutritional_composition';

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
    predominantAlimentGroup: [AlimentGroup, number]
  }
