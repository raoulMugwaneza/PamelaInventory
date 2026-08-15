const Database = require('better-sqlite3');

const db = new Database('pamoja.db'); 

module.exports = db; 
