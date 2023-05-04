const fs = require('fs/promises');

const readfile = async () => {
  const data = await fs.readFile('file.txt', 'utf-8');
  console.log(data);
};
readfile();
// fs.readFile('file.txt')
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

console.log('Welcome to Hell in NODE.js ');

const contacts = require('./contacts');
const { error } = require('console');

// console.log(contacts);
