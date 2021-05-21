import * as mongoose from 'mongoose';
import validator from 'validator';
import {UserInterface} from './UserInterface';

export const UserSchema = new mongoose.Schema({
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

export const User = mongoose.model<UserInterface>('Plate', UserSchema);
