export function formulario() {
    // Capa de fondo opaco
    let fondo = document.createElement("div");
    fondo.className = "modal-background";

    // Contenedor del formulario
    let modal = document.createElement("div");
    modal.className = "modal-container";

    let form = document.createElement("form");
    form.className = "modal-form";

    // Título
    let titulo = document.createElement("h2");
    titulo.textContent = "Agregar nueva tarea";
    form.appendChild(titulo);

    // Campo: Nombre de tarea
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    inputNombre.required = true;
    form.appendChild(inputNombre);

    // Campo: Descripción de tarea
    let textareaDescripcion = document.createElement("textarea");
    textareaDescripcion.placeholder = "Descripción de la tarea";
    textareaDescripcion.rows = 3;
    textareaDescripcion.required = true;
    form.appendChild(textareaDescripcion);

    // Campo: Estado
    let selectEstado = document.createElement("select");
    ["Pendiente", "En proceso", "Completado"].forEach(estado => {
        let option = document.createElement("option");
        option.value = estado.toLowerCase();
        option.textContent = estado;
        selectEstado.appendChild(option);
    });
    form.appendChild(selectEstado);

    // Campo: Fecha
    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.required = true;
    form.appendChild(inputFecha);

    // Botones
    let btnGroup = document.createElement("div");
    btnGroup.className = "modal-buttons";

    let btnCancelar = document.createElement("button");
    btnCancelar.type = "button";
    btnCancelar.textContent = "Cancelar";
    btnCancelar.addEventListener("click", () => fondo.remove());

    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";

    btnGroup.appendChild(btnCancelar);
    btnGroup.appendChild(btnAgregar);
    form.appendChild(btnGroup);

    // Evento al enviar
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const tarea = {
            nombre: inputNombre.value,
            descripcion: textareaDescripcion.value,
            estado: selectEstado.value,
            fecha: inputFecha.value,
            hora: new Date().toLocaleTimeString()
        };
        console.log(tarea);
        fondo.remove();
    });

    modal.appendChild(form);
    fondo.appendChild(modal);
    
    return fondo;
}

