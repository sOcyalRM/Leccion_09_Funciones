//Ejemplo de como funciona una app real 

iniciandoApp();
function iniciandoApp(){
    console.log("App Iniciando, por favor espere...");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda Funcion");
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario... Espere...");
    console.log(`Usuario Autenticado exitosamente: ${usuario}`);
}