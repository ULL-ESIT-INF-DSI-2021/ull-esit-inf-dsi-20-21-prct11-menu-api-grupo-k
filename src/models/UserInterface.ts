import {Document} from 'mongoose';

export interface UserInterface extends Document {
    name: string,
    lastName: string,
    age?: number,
    email: string,
    password: string,
  }
