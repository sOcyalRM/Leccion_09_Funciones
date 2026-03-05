/*El hoisting (o elevación) en JavaScript es el comportamiento predeterminado del intérprete donde las declaraciones de 
variables (var), funciones y clases se mueven conceptualmente a la parte superior de su alcance (scope) antes de ejecutar 
el código. Esto permite utilizar funciones o variables antes de haberlas declarado.
Aunque permite llamar funciones antes de definirlas y organizar el código, a menudo causa errores sutiles, confusión y reduce 
la legibilidad al usar variables*/

sumar();//Esta funcion es reconocida porque el archivo es cargado primero y son reconocidas las funciones
function sumar() { //Se aplica el hoisting
    console.log(2 + 2);
}


//Expresion de Funcion - Function Expression
resultado(); //Es una funcion no existente aun por la forma de la declaracion
const resultado = function(){
    console.log (3+3);
}

