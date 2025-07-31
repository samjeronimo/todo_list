import { footer } from "../components/footer/footerComponent.js";
import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/infoComponent.js";

function dashboardView() {


    let tareasDb = [
        {
            indice: 1,
            titulo: "Investigación sobre células",
            descripcion: "Realizar una investigación completa sobre los tipos de células, sus partes y funciones en el organismo.",
            estado: "completado",
            fechaAs: "17/05/2025",
            fechaEn: "30/07/2025",
            listaIntegrantes: ["👩‍🎓", "👨‍🎓", "🧑‍🎓"]
        },
        {
            indice: 2,
            titulo: "Resumen de la independencia",
            descripcion: "Elaborar un informe detallado sobre los eventos principales que llevaron a la independencia de Guatemala.",
            estado: "pendiente",
            fechaAs: "18/06/2025",
            fechaEn: "31/07/2025",
            listaIntegrantes: ["👩‍🎓", "🧑‍🎓"]
        },
        {
            indice: 3,
            titulo: "Proyecto de ciencias",
            descripcion: "Diseñar un experimento sencillo que demuestre un principio científico, documentando materiales, pasos y conclusiones.",
            estado: "en progreso",
            fechaAs: "10/07/2025",
            fechaEn: "15/08/2025",
            listaIntegrantes: ["🧑‍🎓"]
        }
    ];
    


    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header());

    //seccion1
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion-1";
    seccion1.appendChild(tareas(tareasDb));
    seccion1.appendChild(informacion(tareasDb[0]));
    dashboard.appendChild(seccion1);

    //footer
    dashboard.appendChild(footer());
    

    return dashboard;

}


export { dashboardView };

document.body.appendChild(dashboardView());