import { header } from "../components/header/headerComponent.js";

function dashboardView() {

    let seccion = document.createElement('section');

    seccion.appendChild(header());
    

    return seccion;

}


export { dashboardView };

document.body.appendChild(dashboardView());