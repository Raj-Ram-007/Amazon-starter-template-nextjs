
Schema Model

1. Update C:\Users\rajra\Documents\GitHub\Amazon-starter-template-nextjs\prisma\schema.prisma
    with the schema model


2. Run
    npx prisma migrate dev --name initial-migration --create-only
    npx prisma migrate dev --name initial-migration 

3. SQL 

    SQL command is run and migrations sql is kept in : C:\Users\rajra\Documents\GitHub\Amazon-starter-template-nextjs\prisma\migrations




---

Install prisma and typescript :

    npm install prisma --save-dev  
    npm install @prisma/client
    npm install --dev typescript @types/react
    npm run dev



Create a product :

 localhost:3000/api/backendv1/createProduct

    {
        "product": {
            "title": "8 Gift-wrapped Tea Towels Set",
            "price": "11.95",
            "category" : "Home & Kitchen",
            "description": "Tea towels set which look great and are ideal for drying dishes, glasses, or any other tableware without leaving streaks or tiny fibers behind.",
            "IsActive": "Y",
            "image": "https://enginesroom.com/uploads/HomeEffect/img/HomeEffect-TeaTowels-Pure-Cotton.jpg"

        }
    }


Image Location :

    https://enginesroom.com/uploads/HomeEffect/img/Tea-Towels-Two-Tiny.jpg



Example sites 

https://www.allbirds.co.uk/products/mens-tree-dashers
https://www.diy.com/departments/dulux-rich-black-matt-emulsion-paint-2-5l/183940_BQ.prd