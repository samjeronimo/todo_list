export function header() {

    let header = document.createElement('header');
    
    let h1 = document.createElement('h1');
    h1.textContent = "Todo-List";
    header.appendChild(h1);

    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";
    divTareas.textContent = "Pendientes";
    header.appendChild(divTareas);

    let divNum = document.createElement('div');
    divNum.className = "div-num";
    divNum.textContent = "0";
    divTareas.appendChild(divNum);

    let divLogoUser = document.createElement('div');
    divLogoUser.className = "div-logo-user";
    header.appendChild(divLogoUser);

    let divImg = document.createElement('img');
    divImg.src = "https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png";
    divImg.alt = "user logo";
    divLogoUser.appendChild(divImg);

    


    return header;

}