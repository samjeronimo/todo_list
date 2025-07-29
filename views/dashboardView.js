import { footer } from "../components/footer/footerComponent.js";
import { header } from "../components/header/headerComponent.js";

function dashboardView() {

    let seccion = document.createElement('section');

    seccion.appendChild(header());
    seccion.appendChild(footer());
    

    return seccion;

}


export { dashboardView };

document.body.appendChild(dashboardView());