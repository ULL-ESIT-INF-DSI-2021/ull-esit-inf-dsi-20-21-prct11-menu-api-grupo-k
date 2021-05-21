/* eslint-disable max-len */
import * as mongoose from 'mongoose';
import { PlatesInterface } from './PlatesInterface';

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
  },
  fats: {
    type: Number,
    trim: true,
    required: true,
  },
  carbohydrates: {
    type: Number,
    trim: true,
    required: true,
  },
  calories: {
    type: Number,
    trim: true,
    required: true,
  },
  starch: {
    type: Number,
    trim: true,
    required: true,
  },
  sugars: {
    type: Number,
    trim: true,
    required: true,
  },
  fiber: {
    type: Number,
    trim: true,
    required: true,
  },
  water: {
    type: Number,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  city: {
    type: Number,
    trim: true,
    required: true,
  },
  locality: {
    type: Number,
    trim: true,
    required: true,
  },
  predominantAlimentGroup: {
    type: Map,
    of: String
  },
  ingredients: {
    type: Map,
    of: String
  },
  category: {
    type: String,
    of: String
  },
});

export const plate = mongoose.model<PlatesInterface>('Plate', PlatesSchema);

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