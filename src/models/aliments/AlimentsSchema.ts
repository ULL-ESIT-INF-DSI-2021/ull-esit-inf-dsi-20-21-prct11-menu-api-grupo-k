/* eslint-disable max-len */
import * as mongoose from 'mongoose';
import validator from 'validator';
import {AlimentsInterface} from './AlimentsInterface';

export const AlimentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    trim: true,
    validate: (value: number) => {
      if (!((value > 1) && (value < 100)) && (value - Math.floor(value) == 0)) {
        throw new Error('Age must be a positive integer');
      }
    },
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: (value: string) => {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email format');
      }
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

export const aliment = mongoose.model<AlimentsInterface>('Aliment', AlimentSchema);
