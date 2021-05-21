/* eslint-disable max-len */
import * as mongoose from 'mongoose';
import {CartesInterface} from './CartesInterface';

export const CartesSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  plates: {
    type: Array,
    trim: true,
    required: true,
  },
  menus: {
    type: Array,
    trim: true,
    required: true,
  },
});

export const carte = mongoose.model<CartesInterface>('Carte', CartesSchema);

