/* eslint-disable max-len */
import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';
import {PlatesInterface} from './PlatesInterface';

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
    type: Map,
    of: new Schema({
      alimentGroup: String,
      quantity: Number,
    }),
    required: true,
  },
  ingredients: {
    type: Map,
    of: new Schema({
      aliment: String,
      quantity: Number,
    }),
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
});

export const plateModel = mongoose.model<PlatesInterface>('Plate', PlatesSchema);

/*
const user = new User({
  socialMediaHandles: {}
});

// Good
user.socialMediaHandles.set('github', 'vkarpov15');
// Works too
user.set('socialMediaHandles.twitter', '@code_barbarian');
// Bad, the `myspace` property will **not** get saved
user.socialMediaHandles.myspace = 'fail';

// 'vkarpov15'
console.log(user.socialMediaHandles.get('github'));
// '@code_barbarian'
console.log(user.get('socialMediaHandles.twitter'));
// undefined
user.socialMediaHandles.github;

// Will only save the 'github' and 'twitter' properties
user.save();
*/
