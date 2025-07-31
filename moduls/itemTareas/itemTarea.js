export function tarea(indice, titulo, estado, fechaAs, fechaEn, listaIntegrantes) {
    let div = document.createElement('div');
    div.className = "tarea";

    // Número de tarea
    let divNumero = document.createElement('div');
    divNumero.className = "tarea-numero";
    divNumero.textContent = indice;

    // Título
    let tituloElemento = document.createElement('h3');
    tituloElemento.className = "tarea-titulo";
    tituloElemento.textContent = titulo;

    // Estado
    let estadoElemento = document.createElement('div');
    estadoElemento.className = `tarea-estado ${estado.toLowerCase()}`; 
    estadoElemento.textContent = estado;

    // Fechas
    let fechaAsignada = document.createElement('span');
    fechaAsignada.className = "tarea-fecha";
    fechaAsignada.textContent = fechaAs;

    let fechaEntrega = document.createElement('span');
    fechaEntrega.className = "tarea-fecha";
    fechaEntrega.textContent = fechaEn;

    // Integrantes (emojis en lugar de imágenes)
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "tarea-integrantes";
    listaIntegrantes.forEach(emoji => {
        let integrante = document.createElement('span');
        integrante.className = "tarea-integrante";
        integrante.textContent = emoji;
        divIntegrantes.appendChild(integrante);
    });

    // Botón eliminar
    let btnEliminar = document.createElement('div');
    btnEliminar.className = "tarea-eliminar";
    btnEliminar.textContent = "🗑️";

    // Agregar todos los elementos al contenedor principal
    div.appendChild(divNumero);
    div.appendChild(tituloElemento);
    div.appendChild(estadoElemento);
    div.appendChild(fechaAsignada);
    div.appendChild(fechaEntrega);
    div.appendChild(divIntegrantes);
    div.appendChild(btnEliminar);

    return div;
}
