function sumar (a,b){
    return (a+b);
}

const resultado = sumar(3,2);
console.log(resultado);

//Ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio;//El total aqui es 0 luego se suma otra cantidad cada que es llamada la funcion
}

function calcularImpuesto (total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(200); //Antes de agregarle el nuevo valor a total se realiza una suma dentro de la funcion agregarC 


const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es ${totalPagar}`);
console.log(total);

