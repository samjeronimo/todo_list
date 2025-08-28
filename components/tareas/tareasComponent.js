import { tarea } from "../../moduls/itemTareas/itemTarea.js";

export function tareas(tareasDb) {
    const tareasContainer = document.createElement('div');
    tareasContainer.className = 'div-tareas1';

    tareasDb.forEach((item) => {
        tareasContainer.appendChild(
            tarea(
                item.id,
                item.nombre,
                item.estado_tarea,
                item.fecha_asignada,
                item.fecha_entrega,
                [] 
            )
        );
    });
    

    return tareasContainer;
}