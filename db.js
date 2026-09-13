const Database = require('better-sqlite3');

const db = new Database('pamoja.db'); 

db.pragma('foreign_keys = ON'); 

module.exports = db; 

