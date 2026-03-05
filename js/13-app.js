//Vease 09-app.js de la actual seccion
const reproductor = {
    cancion : '', //Poniendo en practica get y set
    reproducir : id => `Reproduciendo cancion con id: ${id}`,

    pausar : () => 'Pausando Cancion...',

    eliminar : id => `Eliminando cancion con id: ${id}`,

    lista : nombre => `Agregando lista de reproduccion con nombre: ${nombre}`,

    //Definiendo Set y get
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log (`Anadiendo cancion: ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    },

}

reproductor.nuevaCancion = 'Ojitos lindos'; //Debe usarse esta forma para asignar valor en lugar de () y parametro
reproductor.obtenerCancion; //El () no es valido al final del get

console.log(reproductor.reproducir(3));
console.log(reproductor.pausar());
console.log(reproductor.eliminar(4));
console.log(reproductor.lista('Variados'));