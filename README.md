# E-Commerce-API


# ABOUT
This is an E-commerce API made using Node.Js & MongoDB. 

STEPS TO USE THE API:
1) Run "npm install"
2) Start the server using npm start
3) Open postman
4) Make a GET request on localhost:3000/products
5) The products should be visible

## Steps to Use the API:

### Steps to Create a New Product:
1. Start the server using `node app.js`.
2. Open Postman.
3. Set the request method to POST.
4. Enter `localhost:3000/products/create` as the URL.
5. Select the 'Body' tab below the URL field.
6. Choose 'x-www-form-urlencoded' from the dropdown menu.
7. Add 'name' and 'quantity' as keys with desired values.
8. Send the request.
9. If you receive a message confirming successful product addition, you have completed the process.
10. To verify, make a GET request to [localhost:3000/products](http://localhost:3000/products).

### Steps to Delete a Product:
1. Copy the object ID of the product you wish to delete.
2. Append the ID to `localhost:3000/products/`.
3. For Example: `localhost:3000/products/65e742f70518faf32899af12`.
4. Send a DELETE request.
5. Upon successful deletion, you'll receive a confirmation message.

### Steps to Update the Quantity of a Product:
1. Copy the object ID of the product whose quantity you want to update.
2. Append the ID to `localhost:3000/products/`.
3. For example, the URL should look like `localhost:3000/products/65e742f70518faf32899af12`.
4. Select the 'Body' tab below the URL field.
5. Choose 'x-www-form-urlencoded' from the dropdown menu.
6. In the key field, write 'quantity' and the updated value.
7. Send a POST request.
8. You should receive a message containing the updated product details.

