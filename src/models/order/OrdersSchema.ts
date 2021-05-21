/* eslint-disable max-len */
import * as mongoose from 'mongoose';
import { OrdersInterface } from './OrdersInterface';

export const OrdersSchema = new mongoose.Schema({

order_number: {
    type: Number,
    trim: true,
    required: true,
  },
  order_menu: {
    type: Array,
    trim: true,
    required: true,
  },
  personalized_order: {
    type: String,
    trim: true,
    required: true,
  },
  totalPrice: {
    type: Number,
    trim: true,
    required: true,
  },
});

export const carte = mongoose.model<OrdersInterface>('Carte', OrdersSchema);

