/* eslint-disable max-len */
import * as mongoose from 'mongoose';
import {MenusInterface} from './MenusInterface';

const subListPreGroupSchema = new mongoose.Schema({
  alimentGroup: {
    type: String,
    trim: true,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const subPlateSchema = new mongoose.Schema({
  plate: {
    type: String,
    trim: true,
    required: true,
  },
});

export const MenusSchema = new mongoose.Schema({
  plates: {
    type: [subPlateSchema],
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  protein: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  fats: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  carbohydrates: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  calories: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  starch: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  sugars: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  fiber: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  water: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  price: {
    type: Number,
    trim: true,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Error valores mayores que 0');
      }
    },
  },
  alimentGroupList: {
    type: [subListPreGroupSchema],
    required: true,
  },
  verify_menu: {
    type: Boolean,
    trim: true,
    required: true,
  },
});

export const menuModel = mongoose.model<MenusInterface>('Menu', MenusSchema);
