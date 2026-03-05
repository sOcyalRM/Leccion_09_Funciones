//Diferencia entre metodo y funcion

numero1 = 5
numero2 = "6"

console.log(parseInt(numero2)); //a simple vista vemos que la funcion recibe como parametro una variable
console.log(numero1.toString()); // El metodo se aplica en la variable u objeto. Primero el objeto y luego el metodo


function sumar() { //Pero las funciones no siempre reciben un parametro
    console.log(2 + 2);
}
sumar();