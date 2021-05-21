/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable max-len */
import * as yargs from 'yargs';
import {User} from './models/UserSchema';
import {UserInterface} from './models/UserInterface';
import * as mongoose from 'mongoose';
import './db/mongoose';

/**
 * add command
 */
yargs.command({
  command: 'add',
  describe: 'Add a new user',
  builder: {
    name: {
      describe: 'Name',
      demandOption: true,
      type: 'string',
    },
    lastname: {
      describe: 'LastName',
      demandOption: true,
      type: 'string',
    },
    age: {
      describe: 'Age',
      demandOption: false,
      type: 'number',
    },
    email: {
      describe: 'Email',
      demandOption: true,
      type: 'string',
    },
    password: {
      describe: 'Password',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if ((typeof argv.name === 'string') && (typeof argv.lastname === 'string') && (typeof argv.email === 'string') && (typeof argv.password === 'string')) {
      if ((argv.age) && (typeof argv.age === 'number')) {
        add(argv.name, argv.lastname, argv.age, argv.email, argv.password);
      } else {
        add(argv.name, argv.lastname, 0, argv.email, argv.password);
      }
    }
  },
});


function add(name: string, lastname: string, age: number, email: string, password: string) {
  let usuario: UserInterface;
  if (age != 0) {
    usuario = new User({
      name: name,
      lastName: lastname,
      age: age,
      email: email,
      password: password,
    });
  } else {
    usuario = new User({
      name: name,
      lastName: lastname,
      email: email,
      password: password,
    });
  }

  const axios = require('axios').default;

  axios.post('https://grupo-k-p11-menu-app.herokuapp.com/users', usuario).then(function(response: any) {
    console.log(response.status);
    mongoose.connection.close();
  }).catch(function(error: any) {
    console.log(error);
    mongoose.connection.close();
  });
}

yargs.parse();
