const { getCurrentYear } = require('./src/utils');

// Manual check for getCurrentYear
const year = new Date().getFullYear();
if (getCurrentYear() !== year) {
  throw new Error("getCurrentYear did not return the current year");
}
