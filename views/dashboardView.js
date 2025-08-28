import { footer } from "../components/footer/footerComponent.js";
import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/infoComponent.js";

async function dashboard() {
    const dashboard = document.querySelector("#dashboard");
    dashboard.className = "dashboard";
  
    dashboard.appendChild(header());
  
    const section = document.createElement("section");
    section.className = "section-component";
  
    try {
      const response = await fetch(
        "https://backend-todolist-hvq8.onrender.com/api/tareas"
      );
      if (!response.ok) throw new Error("Error en la respuesta del servidor");
      const tareasdb = await response.json();
  
      if (!tareasdb.length) {
        section.innerHTML = `<div class="no-tareas">No hay tareas disponibles</div>`;
      } else {
        // Renderiza lista de tareas
        section.appendChild(tareas(tareasdb));
  
        // Renderiza info de la primera tarea
        section.appendChild(informacion(tareasdb[0]));
      }
    } catch (error) {
      console.error(error);
      section.innerHTML = `<div class="error-message">Error al cargar las tareas</div>`;
    }
  
    dashboard.appendChild(section);
    dashboard.appendChild(footer());
  }
  
  document.addEventListener("DOMContentLoaded", dashboard);