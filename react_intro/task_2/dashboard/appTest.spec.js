// adjust this path depending on where utils.js really lives
const { getCurrentYear } = require('../src/utils');

const year = new Date().getFullYear();
if (getCurrentYear() !== year) {
  throw new Error("getCurrentYear did not return the current year");
}
