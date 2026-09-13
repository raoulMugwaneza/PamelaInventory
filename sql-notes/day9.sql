--WHEN creating a column with a reference,
-- there are two ways in which one could behave.
--1. user_id INTEGER NOT NULL REFERENCES users(id); this is correct
--2. user_id INTEGER NOT NULL, FOREIGN KEY (user_id) REFERENCES users(id);

-- the second way is also correct, it just requires two separate entries ,
-- the FOREIGN KEY must always be recorded at the end of table creating before 
--the closing brackets. 

--the orders  : user_id ref users(id); one user Mukankubana with id 1
--order_items : order_id ref orders(id), product_id ref products(id); 3 is water
-- write the four table join.  

-- DROP table is real understanding. 
--end of day 9. 

while building relationships. You can follow this table:

users
  │
  │ users.id = orders.user_id
  ↓
orders
  │
  │ orders.id = order_items.order_id
  ↓
order_items
  │
  │ order_items.product_id = products.id
  ↓
products

JOIN users.name ON users.id = order_items.order_id; 

SELECT users.name , products.name, order_items.quantity
FROM order_items 
JOIN orders ON orders.id = order_items.order_id
JOIN users ON users.id = orders.user_id
JOIN products ON products.id = order_items.product_id; 

