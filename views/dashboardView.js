function dashboardView() {

    let seccion = document.createElement('section');

    let h1 = document.createElement('h1');
    h1.textContent = "Hola mundo";
    seccion.appendChild(h1);

    return seccion;

}


export { dashboardView };

document.body.appendChild(dashboardView());