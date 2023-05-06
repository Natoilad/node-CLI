// const fs = require('fs/promises');
// const path = require('path');
// const contacts = require('./db/contacts');
const { nanoid } = require('nanoid');
const { Command } = require('commander');
const contacts = require('./db');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContact = await contacts.listContacts();
      return console.log(allContact);

    case 'get':
      const contact = await contacts.getContactById(id);
      return console.log(contact);

    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case 'edit':
      const editContact = await contacts.edit(id, { name, email, phone });
      return console.log(editContact);

    case 'remove':
      const delContact = await contacts.removeContact(id);
      return console.log(delContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
console.log('Welcome to Hell in NODE.js ');
