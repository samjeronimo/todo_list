export function footer() {
    let footer = document.createElement('footer');
    footer.className = "footer";

    // Línea negra
    let linea = document.createElement('div');
    linea.className = "linea";
    footer.appendChild(linea);

    // Contenedor para centrar o dar más estilo al enlace
    let linkContainer = document.createElement('div');
    linkContainer.className = "link-container";
    footer.appendChild(linkContainer);

    // Enlace a GitHub con emoji
    let github = document.createElement('a');
    github.className = "github";
    github.innerHTML = "🐱‍💻GitHub";
    github.href = "https://github.com/samjeronimo/todo_list";
    github.target = "_blank";
    linkContainer.appendChild(github);
    

    return footer;
}
