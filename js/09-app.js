const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con id: ${id}`);
    },

    pausar : function(){
        console.log('Pausando Cancion...');
    },

    eliminar : function(id){
        console.log(`Eliminando cancion con id: ${id}`);
    },

    lista : function(nombre){
        console.log(`Agregando lista de reproduccion con nombre: ${nombre}`);
    }
}

reproductor.reproducir(3);
reproductor.pausar();
reproductor.eliminar(4);
reproductor.lista('Variados');