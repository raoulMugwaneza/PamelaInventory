-- today was a moment to re-understanding how to interact with a database.

CREATE TABLE waterBottles (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL UNIQUE);
--THIS WAY A NAME WILL NEVER BE DELIBERATELY DECLARED NULL. AND IT SHALL NOT DUPLICATE.

--To verify;  INSERT INTO waterBottles (name) VALUES (NULL);
--Runtime error: NOT NULL constraint failed: waterBottles.name (19)

--To verify once again; INSERT INTO waterBottles (name) VALUES ('SteelMetal'); 
--Runtime error: UNIQUE constraint failed: waterBottles.name (19)

--to view the table contents; which I believe is what respods to get. 

SELECT * FROM tableName;

--to update something new. or to put so to say. 
UPDATE categories SET name = 'Fanta' WHERE name = 'BEVERAGES'; 

--to remove an existing row...

DELETE FROM categories WHERE name = 'Provisions'; 