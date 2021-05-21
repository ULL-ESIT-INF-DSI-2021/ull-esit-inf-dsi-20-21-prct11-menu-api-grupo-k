import {Document} from 'mongoose';
import { AlimentGroup } from '../aliment/aliment';
import { NutritionalComposition } from '../interfaces/nutritional_composition';
import { Plate } from '../plate/plate';

export interface MenusInterface extends Document, NutritionalComposition {
    name: string, 
    plates: Plate[],
    price: number,
    protein: number,
    fats: number,
    carbohydrates: number,
    calories: number,
    starch: number,
    sugars: number,
    fiber: number,
    water:number,
    alimentGroupList : [AlimentGroup, number][];
    verify_menu: boolean; 
  }
