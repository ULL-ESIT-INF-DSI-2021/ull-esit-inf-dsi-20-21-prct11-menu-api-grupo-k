import {Document} from 'mongoose';

export interface AlimentsInterface extends Document {
    name: string,
    lastName: string,
    age?: number,
    email: string,
    password: string,
  }
