# gestion_datos.js


This project is a simple web application that allows you to manage users and products using CRUD (Create, Read, Update, Delete). It is developed in **JavaScript**, with dynamic DOM interaction and visual notifications using **SweetAlert2**.

---
### **User Management**
- **Register Users**: Allows you to register users with the following fields:
- First Name
- Last Name
- Email
- Age
- Clan
- Shift
- **Duplicate Validation**: Does not allow users to be registered with the same data.
- **Field Clearing**: Form fields are automatically cleared after registering a user.
- **Visual Notification**: A success or warning message is displayed when registering a user.

## Features

- Manage products with unique identifiers, names, prices, and categories.
- Prevent duplicate product entries using `Set`.
- Validate and iterate over product data using:
  - `for...in` for object properties.
  - `for...of` for Sets.
  - `forEach()` for descriptive category listings.
- Responsive and intuitive user interface built with HTML5 and CSS3.
- Fast and efficient development workflow using Vite.

---

##  Technologies Used

- JavaScript (ES6+)
- Vite (development server and build tool)
- HTML5 / CSS3
- DOM Manipulation
- Advanced data structures: Object, Set, Map

---

### **`data_management.js` File**
1. **User Management**:
- Captures data from the user form.
- Validates duplicates in the `coders` array.
- Clears fields after registering a user.
- Displays notifications with **SweetAlert2**.

2. **Product Management**:
- Captures data from the product form.
- Validates duplicates in the `products` array and predefined products (`produc`).
- Displays products in a dynamic list.
- Allows deleting products using a "Delete" button.

3. **Main Functions**:
- `showProducts()`: Updates the list of products in the DOM.
- `deleteProduct(id)`: Removes a product from the `products` array and updates the list.
- `cleanFields()`: Clears the fields in the product form.

---


``
##  Repository Structure

```bash
GESTION_DATOS.JS/
├──crud-coders
│   │ src/                        
│   ├── css/
│   │   └── style.css           
│   │
│   ├── js/                    
│       ├── gestion_datos.js                
│      
│
├── .gitignore                  
├── index.html
│── package.json
│── License
│── README.MD


``

---

## ⚙️ Usage Instructions

1. Clone or download this repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.
4. Open your browser at the indicated localhost URL.
5. Use the interface to add, edit, and manage inventory products dynamically.
6. Data structures ensure efficient management, duplication prevention, and smooth interaction.



## 👤 Author & Contact

- **Author:** Felipe Miguel Palmar Ramirez
- **Email:** pipepalmar@hotmail.com
- **Cedula:** 1119392593  



