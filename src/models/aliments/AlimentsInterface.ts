/* eslint-disable max-len */
/* eslint-disable camelcase */
import {Document} from 'mongoose';
import {AlimentGroup} from '../../class/aliment/aliment';
import {NutritionalComposition} from '../../class/interfaces/nutritional_composition';

export interface AlimentsInterface extends Document, NutritionalComposition {
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
    city: string,
    locality: string,
    aliment_group: AlimentGroup
  }
