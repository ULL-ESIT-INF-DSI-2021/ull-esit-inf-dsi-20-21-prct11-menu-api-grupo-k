/* eslint-disable max-len */
import * as mongoose from 'mongoose';
import {PlatesInterface} from './PlatesInterface';

const subPreGroupSchema = new mongoose.Schema({
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

const subIngredientsSchema = new mongoose.Schema({
  aliment: {
    type: String,
    trim: true,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const PlatesSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
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
  predominantAlimentGroup: {
    type: subPreGroupSchema,
    required: true,
  },
  ingredients: {
    type: [subIngredientsSchema],
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
});

export const plateModel = mongoose.model<PlatesInterface>('Plate', PlatesSchema);
