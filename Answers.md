Q-1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
Ans- Add a foreign key constraint: 
        We can add a foreign key constraint to the "category_id" column in the "Product" table. This constraint will ensure that the value in the "category_id" column must exist in the primary key of the "Product_Category" table.

Q-2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
Ans- Use a validation rule: 
        We can use a validation rule on the "category_id" column in the "Product" table. This validation rule would check that the value in the "category_id" column exists in the primary key of the "Product_Category" table.