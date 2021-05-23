/* eslint-disable max-len */
/* eslint-disable camelcase */
import {Document} from 'mongoose';
import {AlimentGroup} from '../../class/aliment/aliment';
import {NutritionalComposition} from '../../class/interfaces/nutritional_composition';
import {Plate} from '../../class/plate/plate';

/**
 * Interfaz de los menus para crear el esquema
 * */
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
