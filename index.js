module.exports = function addDays(days) {
  let addDays = require("date-fns/addDays");
  let newday = addDays(new Date(2020, 8, 22), days);
  return `${newday.getDate()}-${newday.getMonth()}-${newday.getFullYear()}`;
};
