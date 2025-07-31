export function informacion(tareaInfo) {
    let div = document.createElement('div');
    div.className = "div-informacion";
    
    // Botones superiores
    let botones = document.createElement('div');
    botones.className = "botones";
    div.appendChild(botones);

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.textContent = "+ tarea";  
    botones.appendChild(btnTarea);

    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.textContent = "Archivados";
    botones.appendChild(btnArchivados);

    // Tarjeta de información
    let descripcion = document.createElement('div');
    descripcion.className = "descripcion";
    div.appendChild(descripcion);

    // Estado (alineado a la derecha)
    let estado = document.createElement('div');
    estado.className = `estado-label ${tareaInfo.estado?.toLowerCase()}`;
    estado.textContent = tareaInfo.estado || "completado";
    descripcion.appendChild(estado);

    // Título
    let h2 = document.createElement('h2');
    h2.className = "descripcion-titulo";
    h2.textContent = tareaInfo.titulo || "Título de la asignación";
    descripcion.appendChild(h2);

    // Descripción
    let p = document.createElement('p');
    p.className = "descripcion-texto";
    p.textContent = tareaInfo.descripcion || "Descripción no disponible.";
    descripcion.appendChild(p);

    // Subtítulo
    let h2Integrantes = document.createElement('h2');
    h2Integrantes.textContent = "Integrantes";
    descripcion.appendChild(h2Integrantes);

    // Lista de integrantes
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "descripcion-integrantes";
    tareaInfo.listaIntegrantes?.forEach(emoji => {
        let span = document.createElement('span');
        span.className = "integrante-emoji";
        span.textContent = emoji;
        divIntegrantes.appendChild(span);
    });
    descripcion.appendChild(divIntegrantes);

    return div;
}
