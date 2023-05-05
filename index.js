const fs = require('fs/promises');
const path = require('path');
const contacts = require('./db');

// const contactsPath = path(__dirname, contacts.json);

console.log('Welcome to Hell in NODE.js ');

// const { Command } = require('commander');
// const program = new Command();
// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContact = await contacts.getALL();
      return allContact;

    // case 'get':
    //   // ... id
    //   break;

    // case 'add':
    //   // ... name email phone
    //   break;

    // case 'remove':
    //   // ... id
    //   break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction({ action: 'list' });
