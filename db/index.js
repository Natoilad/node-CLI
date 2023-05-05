const fs = require('fs/promises');
const path = require('path');
const contactPath = path.join(__dirname, 'contacts.json');

const getALL = async () => {
  const data = await fs.readFile(`${contactPath}`, 'utf-8');
  console.log(data);
  return JSON.parse(data);
};

module.exports = {
  getALL,
};
