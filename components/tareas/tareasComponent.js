import { tarea } from "../../moduls/itemTareas/itemTarea.js";



export function tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "tareas";

    tareasDb.forEach((t) => {
        div.appendChild(tarea(
            t.indice,
            t.titulo,
            t.estado,
            t.fechaAs,
            t.fechaEn,
            t.listaIntegrantes
        ));
    });

    return div;
}
