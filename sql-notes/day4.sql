-- creating a table in sql

CREATE TABLE categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);

-- adding something to a table

INSERT INTO categories (name) VALUES ('Beverages'); 
INSERT INTO categories (name) VALUES ('Food');
INSERT INTO categories (name) VALUES ('Provisions');


INSERT INTO categories (name) VALUES (BEVERAGE); --This produces an error since
--literal strings are needed for sql to register them. otherwise, they are considered
--to be references to existing data.

-- retrieving information

SELECT * FROM categories;

SELECT name FROM categories;

SELECT * FROM categories WHERE id=5; --this returns nothing if id does not exist
SELECT * FROM categories WHERE name = 'Food'; --this is good and it returns 2|Food.