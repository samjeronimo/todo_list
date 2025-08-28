export function tarea(
    id, 
    nombre,
    descripcion,
    estado_tarea,
    fecha_asignada,
    fecha_entrega 
    ) {
    // Contenedor principal 
    let div = document.createElement('div');
    div.className = "tarea";

    // Número de tarea
    let divNumero = document.createElement('div');
    divNumero.className = "tarea-numero";
    divNumero.textContent = id;

    // Título
    let tituloElemento = document.createElement('h3');
    tituloElemento.className = "tarea-titulo";
    tituloElemento.textContent = nombre;

    // Estado
    let estadoElemento = document.createElement('div');
    estadoElemento.className = `tarea-estado ${estado_tarea ? estado_tarea.toLowerCase() : "sin-estado"}`; 
    estadoElemento.textContent = estado_tarea || "Sin estado";

    // Fechas
    let fechaAsignada = document.createElement('span');
    fechaAsignada.className = "tarea-fecha";
    fechaAsignada.textContent = fecha_asignada || "N/A";

    let fechaEntrega = document.createElement('span');
    fechaEntrega.className = "tarea-fecha";
    fechaEntrega.textContent = fecha_entrega || "N/A";

    // Descripción
    let descripcionElemento = document.createElement('p');
    descripcionElemento.className = "tarea-desc";
    descripcionElemento.textContent = descripcion;

    // Botón eliminar
    let btnEliminar = document.createElement('div');
    btnEliminar.className = "tarea-eliminar";
    btnEliminar.textContent = "🗑️";

    // Agregar al contenedor
    div.appendChild(divNumero);
    div.appendChild(tituloElemento);
    div.appendChild(estadoElemento);
    div.appendChild(fechaAsignada);
    div.appendChild(fechaEntrega);
    div.appendChild(descripcionElemento);
    div.appendChild(btnEliminar);

    return div;
}
