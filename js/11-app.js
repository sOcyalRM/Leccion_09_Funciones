const aprendiendo = function (tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.js');

//En el siguiente codigo la funcion es simplificada utilizando =>. No es necesaria la llave{}, tampoco los parentesis si se 
//desea retornar un valor. Ademas, el return es implicito

//const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`; //El parentesis en el parametro es tambien opcional
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;//Es necesario el () si hay dos parametros

console.log(aprendiendo2('JavaScript', 'Node.js'));