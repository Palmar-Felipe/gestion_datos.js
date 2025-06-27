




let coders=[]

console.log("¡Gestion de Datos con objetos, sets y maps!");


let $name=document.getElementById("name")
let $lastname=document.getElementById("lastname")
let $email=document.getElementById("email")
let $age=document.getElementById("number")
let $clan=document.getElementById("clan")
let $day=document.getElementById("day")
let $button=document.getElementById("button")







$button.addEventListener("click",function(){

    

    let coder = {
        
        nombre: $name.value,
        apellido: $lastname.value,
        email: $email.value,
        edad: $age.value,
        clan: $clan.value,
        jornada: $day.value,
    }


    let duplicado = coders.some((c) =>
    c.nombre === coder.nombre &&
    c.apellido === coder.apellido &&
    c.email === coder.email &&
    c.edad === coder.edad &&
    c.clan === coder.clan &&
    c.jornada === coder.jornada
  );

  if (duplicado) {
    Swal.fire({
      title: "⚠️ Este usuario ya fue registrado.",
      icon: "warning",
      position: "center",
      showConfirmButton: true
    });
    return; // Detener si es duplicado
  }
    
    coders.push(coder)
    console.clear()
    console.table(coders)
    Swal.fire({
        title: "¡¡Usuario registrado correctamente!!",
        icon: "success",
        position: "center", // Puedes cambiar la posición
        showConfirmButton: true
    });

});




let productos = [];

const produc={
  1:{id:1,nombre: "play station4", precio: 2000},
  2:{id:2,nombre: "iphonexs", precio: 3000},
  3:{id:3,nombre: "tablet", precio: 4000}
}
let $idProducto = document.getElementById("ideproducto");
let $nombre = document.getElementById("productoNombre");
let $precio = document.getElementById("productoPrecio");
let $categoria = document.getElementById("productoCategoria");
let $boton = document.getElementById("agregarProducto");
let $lista = document.getElementById("listaProductos");

// Función para agregar un producto
$boton.addEventListener("click", () => {
  let id = $idProducto.value;
  let nombre = $nombre.value;
  let precio = parseFloat($precio.value);
  let categoria = $categoria.value;

  // Validar campos
  if ( id==="" || nombre === "" || isNaN(precio) || categoria === "") {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  let producto = {
    id,
    nombre,
    precio,
    categoria
  };

  productos.push(producto);
  mostrarProductos();
  limpiarCampos();
});


function mostrarProductos() {
  $lista.innerHTML = "";
  productos.forEach((prod) => {
    $lista.innerHTML += `<li>
      Codigo ${prod.id}: ${prod.nombre} - $${prod.precio} (${prod.categoria})
    </li>`;
  });
}


// Limpiar campos
function limpiarCampos() {
  $idProducto.value= "";
  $nombre.value = "";
  $precio.value = "";
  $categoria.value = "";
}
