const fs = require('fs/promises');
const path = require('path');

const contactsPath = path(__dirname, contacts.json);

const addText = async () => {
  await fs.appendFile('file.txt', '\nappendtext');
};
// addText();

const innerText = async () => {
  const result = await fs.writeFile('file.txt', 'file');
  //   console.log(result);
};
innerText();
const readfile = async () => {
  const data = await fs.readFile('file.txt', 'utf-8');
  console.log(data);
};
readfile();

// fs.readFile('file.txt')
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

console.log('Welcome to Hell in NODE.js ');

const contacts = require('./db/contacts');
const { error } = require('console');
const { appendFile } = require('fs');

// console.log(contacts);
