const { readFileSync } = require('fs');
const { join } = require('path');

const eslintConfigPath = join(__dirname, '.eslintrc.json');
const eslintConfigStr = readFileSync(eslintConfigPath, 'utf8');
const eslintConfigJson = JSON.parse(eslintConfigStr);

module.exports = eslintConfigJson;
