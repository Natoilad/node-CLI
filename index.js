const fs = require('fs/promises');
const path = require('path');
const contacts = require('./db');
const { nanoid } = require('nanoid');
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
      return console.log(allContact);

    case 'get':
      const contact = await contacts.get(id);
      return console.log(contact);

    case 'add':
      const newContact = await contacts.add({ name, email, phone });
      return console.log(newContact);
    case 'edit':
      const editContact = await contacts.edit(id, { name, email, phone });
      return console.log(editContact);

    case 'remove':
      const delContact = await contacts.del(id);
      return console.log(delContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: 'rsKkOQUi80UsgVPCcLZZW' });

// invokeAction({
//   action: 'add',
//   name: 'Alex Test',
//   email: 'Test@mail.com',
//   phone: '0971231212',
// });
// invokeAction({
//   action: 'edit',
//   id: 'O-R1ENT611rEan8JQSEtj',
//   name: 'Alex Test',
//   email: 'Test1@mail.com',
//   phone: '0971231212',
// });

// invokeAction({ action: 'remove', id: 'EYB8zFDw9BSQhu-uAuW7Y' });
