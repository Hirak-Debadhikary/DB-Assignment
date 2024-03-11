db.createCollection("product_category", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "desc", "created_at", "modified_at"],
        properties: {
          id: {
            bsonType: "int",
            description: "The unique identifier for the product category",
          },
          name: {
            bsonType: "string",
            description: "The name of the product category",
          },
          desc: {
            bsonType: "string",  // Changed type from text to string as text is not a valid type in MongoDB
            description: "The description of the product category",
          },
          created_at: {
            bsonType: "date",
            description: "The timestamp for when the product category was created",
          },
          modified_at: {
            bsonType: "date",
            description: "The timestamp for when the product category was last modified",
          },
          deleted_at: {
            bsonType: ["date", "null"],  // nullable field
            description: "The timestamp for when the product category was deleted",
          },
        },
      },
    },
  });
  
  db.createCollection("product", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "desc", "SKU", "price", "created_at", "modified_at"],
        properties: {
          id: {
            bsonType: "int",
            description: "The unique identifier for the product",
          },
          name: {
            bsonType: "string",
            description: "The name of the product",
          },
          desc: {
            bsonType: "string",  // Changed type from text to string as text is not a valid type in MongoDB
            description: "The description of the product",
          },
          SKU: {
            bsonType: "string",
            description: "The stock keeping unit for the product",
          },
          category_id: {
            bsonType: "int",
            description: "The foreign key for the product category",
            references: "product_category(id)",
          },
          inventory_id: {
            bsonType: "int",
            description: "The foreign key for the product inventory",
          },
          price: {
            bsonType: "decimal",
            description: "The price of the product",
          },
          discount_id: {
            bsonType: "int",
            description: "The foreign key for the discount",
          },
          created_at: {
            bsonType: "date",
            description: "The timestamp for when the product was created",
          },
          modified_at: {
            bsonType: "date",
            description: "The timestamp for when the product was last modified",
          },
          deleted_at: {
            bsonType: ["date", "null"],  // nullable field
            description: "The timestamp for when the product was deleted",
          },
        },
      },
    },
  });

  db.createCollection("product_inventory", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["quantity", "created_at", "modified_at"],
        properties: {
          id: {
            bsonType: "int",
            description: "The unique identifier for the product inventory",
          },
          quantity: {
            bsonType: "int",
            description: "The quantity of the product in inventory",
          },
          created_at: {
            bsonType: "date",
            description: "The timestamp for when the product inventory was created",
          },
          modified_at: {
            bsonType: "date",
            description: "The timestamp for when the product inventory was last modified",
          },
          deleted_at: {
            bsonType: ["date", "null"],  // nullable field
            description: "The timestamp for when the product inventory was deleted",
          },
        },
      },
    },
  });

  db.createCollection("discount", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "desc", "discount_percent", "active", "created_at", "modified_at"],
        properties: {
          id: {
            bsonType: "int",
            description: "The unique identifier for the discount",
          },
          name: {
            bsonType: "string",
            description: "The name of the discount",
          },
          desc: {
            bsonType: "string",
            description: "The description of the discount",
          },
          discount_percent: {
            bsonType: "decimal",
            description: "The discount percentage (e.g., 0.1 for 10%)",
          },
          active: {
            bsonType: "bool",
            description: "Is the discount currently active (true) or inactive (false)",
          },
          created_at: {
            bsonType: "date",
            description: "The timestamp for when the discount was created",
          },
          modified_at: {
            bsonType: "date",
            description: "The timestamp for when the discount was last modified",
          },
          deleted_at: {
            bsonType: ["date", "null"],  // nullable field
            description: "The timestamp for when the discount was deleted",
          },
        },
      },
    },
  });