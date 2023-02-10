/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   
   let objeto = {
      nombre: nombre, 
      edad: edad, 
      meow: function(){return ("Meow!");},
   } 
   return objeto;
} 

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   let usuario = {};
   usuario.nombre = nombre;
   usuario.email = email;
   usuario.password = password;
   return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad]= null // se accede la prop por parametro, por eso la falta de comillas.
   return objeto; 
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo] (); // Se utiliza Bracket-notation por no conocer el nombre de la propiedad 
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   let producto = objetoMisterioso.numeroMisterioso * 5;
   return producto;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad]; 
   return objeto; 
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.email){
      return true;
   }
   else{
      return false;
   }
   
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objeto.hasOwnProperty(propiedad)){
     return true;
   }
   else{
      return false;
   }
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.password === password){
      return true;
   }
   else{
      return false;
   }
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;    // o objetoUsuario["password"]. Se utiliza comillas por saber su propiedad.
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   
   // ejemplo visual ->    objetoUsuario { amigos: [prop 1, prop2...nuevoAmigo]}
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
} 

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
  
  // ejemplo visual ->        objetoMuchosUsuarios [{esPremium: true}, {esPremium: true},... ]
   objetoMuchosUsuarios.forEach(usuario => {    //até aqui, funcion array 
    usuario.esPremium = true     // aqui ja é objeto. Se accede a la propiedad y se cambia el valor
   });
    

   //opcion 2:
   // for (const usuario of object) {   //funcion ForOf. Al lugar de "const", se puede usar "let" o "var".
   //    usuario.esPremium = true

      return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
                                                  // "porst o elemento"
   // ejemplo visual ->        objetoUsuario { posts: [{likes: 5}, {likes: 8}, {likes: 3}]}
 var contador = 0                             // Se crea una var, posteriormente, a partir del objeto se accesa la propiedad que, por
 objetoUsuario.posts.forEach(post => {    // contener un array, es seguida de un forEach (elemento => {})
   contador = contador + post.likes
 })
 return contador;                             // Se retorna la var.
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8                     // Es una propiedad (prop4)
   // Tu código:
   
   // ejemplo visual ->      objetoProducto {prop1: x, pro2: y, calcularPrecioDescuento: funcion, prop4: z}

   objetoProducto.calcularPrecioDescuento = function (){        // Se crea una prop que contiene una función,
  var descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
  objetoProducto["Precio Final"] = objetoProducto.precio - descuento    // Se utiliza en Bracket por que la prop contiene un espacio
  return objetoProducto["Precio Final"];
}
return objetoProducto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
