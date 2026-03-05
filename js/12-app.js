//Vease capitoulo 08-Arrays - 10-app.js
const carrito = [
    {nombre: 'Monitor 24 pulgadas', precio:'500'},
    {nombre: 'Tablet', precio:'400'},
    {nombre: 'Teclado', precio:'200'},
    {nombre: 'Celular', precio:'600'},
    {nombre: 'Audifonos', precio:'100'},
    {nombre: 'Television', precio:'300'},
]

//Recorro el array con map. //La diferencia de map con respecto a foreach es que .map crea un nuevo
//carrito.map indica que los elementos de de carrito seran mapeados. Luego, la funcion mas el parametro me sirven para obtener 
//cada elemento del arreglo, en este caso son objetos con atributos.
const nuevoArreglo = carrito.map( producto =>  `${producto.nombre} - Precio: ${producto.precio}`);


//rocorrer con foreach. Este caso es similar a carrito.map, donde carrito.forEach indica que los elementos de de carrito seran
// mapeados. A diferencia de .map, .forEach no crea un nuevo objeto
carrito.forEach( producto =>  console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);
