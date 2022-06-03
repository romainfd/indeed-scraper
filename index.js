"use strict";
const indeedScraper = require("./lib/scraper.js");

module.exports.query = function(queryObject) {
  return indeedScraper.query(queryObject);
};

module.exports.getCompanies = function(jobs) {
  return indeedScraper.getCompanies(jobs);
};
