//Esta es una forma de agregar valores por defecto de no ser proveidos los valores
function saludar(nombre= 'Desconocido', apellido = ' '){// De no recibir valores estos son los mostrados en salida
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Oscaly', 'Rosario');