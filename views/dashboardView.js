import { footer } from "../components/footer/footerComponent.js";
import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/infoComponent.js";

function dashboardView() {

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header());

    //seccion1
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion-1";
    seccion1.appendChild(tareas());
    seccion1.appendChild(informacion());
    dashboard.appendChild(seccion1);

    //footer
    dashboard.appendChild(footer());
    

    return dashboard;

}


export { dashboardView };

document.body.appendChild(dashboardView());