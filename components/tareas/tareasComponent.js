import { tarea } from "../../moduls/itemTareas/itemTarea.js";

let tareasDb = [
    {
        indice: 1,
        titulo: "Investigación sobre células",
        estado: "completado",
        fechaAs: "17/05/2025",
        fechaEn: "30/07/2025",
        listaIntegrantes: ["👩‍🎓", "👨‍🎓", "🧑‍🎓"]
    },
    {
        indice: 2,
        titulo: "Resumen de la independencia",
        estado: "pendiente",
        fechaAs: "18/06/2025",
        fechaEn: "31/07/2025",
        listaIntegrantes: ["👩‍🎓", "🧑‍🎓"]
    },
    {
        indice: 3,
        titulo: "Proyecto de ciencias",
        estado: "en progreso",
        fechaAs: "10/07/2025",
        fechaEn: "15/08/2025",
        listaIntegrantes: ["🧑‍🎓"]
    }
];

export function tareas() {
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
