const { listContacts } = require('./contacts');
const { getContactById } = require('./contacts');
const { addContact } = require('./contacts');
const { edit } = require('./contacts');
const { removeContact } = require('./contacts');
module.exports = {
  listContacts,
  getContactById,
  addContact,
  edit,
  removeContact,
};
