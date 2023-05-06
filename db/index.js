const { json } = require('body-parser');
const fs = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');
const contactPath = path.join(__dirname, 'contacts.json');

const getALL = async () => {
  const data = await fs.readFile(`${contactPath}`);
  return JSON.parse(data);
};
const get = async id => {
  const contacts = await getALL();
  const contact = contacts.find(item => item.id === id);
  return contact || null;
};

const add = async data => {
  const contacts = await getALL();
  const newContact = { id: nanoid(), ...data };
  contacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return newContact || null;
};

const edit = async (id, data) => {
  const contacts = await getALL();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, ...data };
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

const del = async (id, data) => {
  const contacts = await getALL();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return result;
};

module.exports = {
  getALL,
  get,
  add,
  edit,
  del,
};
