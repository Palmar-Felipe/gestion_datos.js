let coders = [];

console.log("Data Management with objects, sets, and maps!");

let $firstName = document.getElementById("firstName");
let $lastName = document.getElementById("lastName");
let $email = document.getElementById("email");
let $age = document.getElementById("age");
let $clan = document.getElementById("clan");
let $day = document.getElementById("day");
let $registerButton = document.getElementById("registerButton");

$registerButton.addEventListener("click", function () {
  let coder = {
    firstName: $firstName.value,
    lastName: $lastName.value,
    email: $email.value,
    age: $age.value,
    clan: $clan.value,
    day: $day.value,
  };

  let duplicate = coders.some(
    (c) =>
      c.firstName === coder.firstName &&
      c.lastName === coder.lastName &&
      c.email === coder.email &&
      c.age === coder.age &&
      c.clan === coder.clan &&
      c.day === coder.day
  );

  if (duplicate) {
    Swal.fire({
      title: "⚠️ This user is already registered.",
      icon: "warning",
      position: "center",
      showConfirmButton: true,
    });
    return; // Stop if duplicate
  }

  clearFields();
  coders.push(coder);

  console.clear();
  console.table(coders);
  Swal.fire({
    title: "User registered successfully!",
    icon: "success",
    position: "center",
    showConfirmButton: true,
  });

  function clearFields() {
    $firstName.value = "";
    $lastName.value = "";
    $email.value = "";
    $age.value = "";
    $clan.value = "";
    $day.value = "";
  }
});

let products = [];

const predefinedProducts = {
  1: { id: 1, name: "PlayStation 4", price: 2000, category: "Video Game" },
  2: { id: 2, name: "iPhone XS", price: 3000, category: "Smartphone" },
  3: { id: 3, name: "Tablet", price: 4000, category: "Electronic" },
};

let $productId = document.getElementById("productId");
let $productName = document.getElementById("productName");
let $productPrice = document.getElementById("productPrice");
let $productCategory = document.getElementById("productCategory");
let $addProductButton = document.getElementById("addProductButton");
let $productList = document.getElementById("productList");

// Function to add a product
$addProductButton.addEventListener("click", () => {
  let id = $productId.value;
  let name = $productName.value;
  let price = parseFloat($productPrice.value);
  let category = $productCategory.value;

  // Validate fields
  if (id === "" || name === "" || isNaN(price) || category === "") {
    alert("Please complete all fields correctly.");
    return;
  }

  

  const duplicateProduct = products.some(
    (e) =>
      e.id === id &&
      e.name === name &&
      e.price === price &&
      e.category === category
  );

  if (duplicateProduct) {
    Swal.fire({
      title: "⚠️ This product is already registered.",
      icon: "warning",
      position: "center",
      showConfirmButton: true,
    });
    return;
  }

  // Check if the ID already exists
  const duplicateId = products.some((e) => e.id === id);
  if (duplicateId) {
    Swal.fire({
      title: "⚠️ The ID already exists. Please enter a unique ID.",
      icon: "warning",
      position: "center",
      showConfirmButton: true,
    });
    return;
  }

  // Check if the name already exists
  const duplicateName = products.some((e) => e.name === name);
  if (duplicateName) {
    Swal.fire({
      title: "⚠️ The product name is already registered.",
      icon: "warning",
      position: "center",
      showConfirmButton: true,
    });
    return;
  }

  // Create a new product with the entered values
  const newProduct = {
    id: id,
    name: name,
    price: price,
    category: category,
  };

  products.push(newProduct);
  displayProducts();
  clearFields();
  Swal.fire({
    title: "Product registered successfully!",
    icon: "success",
    position: "center",
    showConfirmButton: true,
  });
});

function displayProducts() {
  const predefined = Object.values(predefinedProducts);
  const allProducts = predefined.concat(products);

  $productList.innerHTML = "";
  allProducts.forEach((prod) => {
    $productList.innerHTML += `<li>
      Code ${prod.id}: ${prod.name} - $${prod.price} (${prod.category})
      <button class="deleteProduct" data-id="${prod.id}">Delete</button>
    </li>`;
  });

  // Add events to delete buttons
  document.querySelectorAll(".deleteProduct").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      deleteProduct(productId);
    });
  });
}

function deleteProduct(id) {
  products = products.filter((prod) => prod.id !== id);

  displayProducts();

  Swal.fire({
    title: "Product deleted successfully",
    icon: "success",
    position: "center",
    showConfirmButton: true,
  });
}

// Clear fields
function clearFields() {
  $productId.value = "";
  $productName.value = "";
  $productPrice.value = "";
  $productCategory.value = "";
}

// Edit product

function loadProductForEditing(id) {
  // Buscar el producto por ID
  const product = products.find((prod) => prod.id === id);

  if (product) {
    // Cargar los datos del producto en los campos del formulario
    $productId.value = product.id;
    $productName.value = product.name;
    $productPrice.value = product.price;
    $productCategory.value = product.category;

    // Deshabilitar el campo ID para evitar que se edite
    $productId.disabled = true;

    // Cambiar el texto del botón para indicar que se está editando
    $addProductButton.textContent = "Update Product";

    // Guardar el ID del producto que se está editando
    $addProductButton.dataset.editing = id;
  }
}

