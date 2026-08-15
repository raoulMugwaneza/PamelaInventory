-- to create a new table 
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);select

-- to reinforce category_id verification:
--we add; 

PRAGMA foreign_keys = ON; 

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id)
); 

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id)
); 

--To reinforce any form of foreign key; you must use the following:

PRAGMA foreign_keys = ON; 

--this way, all data that does not have a valid foreign key will 
--be rejected with a code that says: "FOREIGN KEY constraint failed"
