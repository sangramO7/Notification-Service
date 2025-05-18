const fs = require('fs/promises');
const path = require('path');

const fileLocation = path.join(__dirname, '../data/data.json');

async function loadData() {
  const content = await fs.readFile(fileLocation, 'utf-8');
  return JSON.parse(content);
}

async function saveData(content) {
  await fs.writeFile(fileLocation, JSON.stringify(content, null, 2));
}

module.exports = { loadData, saveData };
