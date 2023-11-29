// Tomar información de un archivo .json para los cursos y mostrarlos en la pantalla.
const urlProgramas = "https://raw.githubusercontent.com/brunocelada/Personal-Projects/main/Instituto/seirosario-page/cursos.json";

async function getUrlData(url, funcion){
    const response = await fetch (url); //, { mode: 'no-cors' }
    if (response.ok){
        const data = await response.json();

        funcion(data);
    }
}
getUrlData(urlProgramas, outputCursos);

function outputCursos(data){
    data.forEach(programa => {
        let div = document.createElement("div");
        div.className = "cursos-contenedor";

        let nombre = document.createElement("h2");
        nombre.textContent = programa.nombre;

        programa.cursos.forEach(curso => {
            if (curso.status)
            {
                let section = document.createElement("section");
                section.className = "curso";

                let imagen = document.createElement("img");
                imagen.className = "curso-img";
                imagen.src = curso.img;
                imagen.alt = curso.titulo;
                section.appendChild(imagen);

                let titulo = document.createElement("h3");
                titulo.className = "curso-titulo";
                titulo.textContent = curso.titulo;
                section.appendChild(titulo);
                
                let horario = document.createElement("h4");
                horario.className = "curso-horario";
                horario.textContent = curso.horario;
                section.appendChild(horario);

                let instructor = document.createElement("p");
                instructor.className = "curso-modalidad";
                instructor.textContent = curso.instructor;
                section.appendChild(instructor);

                let modalidad = document.createElement("p");
                modalidad.className = "curso-modalidad";
                modalidad.textContent = curso.modalidad;
                section.appendChild(modalidad);

                let wspLink = document.createElement("a");
                wspLink.className = "button wsp";
                wspLink.href = curso.linkWSP;
                wspLink.textContent = "Unirme al grupo";
                wspLink.target = "_blank";
                section.appendChild(wspLink);

                let space = document.createElement("br");
                section.appendChild(space);

                let matLink = document.createElement("a");
                matLink.className = "button material";
                matLink.href = curso.linkMAT;
                matLink.textContent = "Material de estudio";
                matLink.target = "_blank";
                section.appendChild(matLink);

                div.appendChild(section);
            }
        });

        let newPrograma = document.querySelector("#cursos");
        newPrograma.appendChild(nombre);
        newPrograma.appendChild(div);
    });
}

// Titulo y mensajes
const urlMensajes = "https://raw.githubusercontent.com/brunocelada/Personal-Projects/main/Instituto/seirosario-page/mensajes.json";
const año = document.querySelector("#año");
const periodo = document.querySelector("#periodo");
const mensaje = document.querySelector("#mensaje");

getUrlData(urlMensajes, outputMensajes);

function outputMensajes(data) {
    año.innerHTML = data.año;
    periodo.innerHTML = data.periodo;
    mensaje.innerHTML = data.mensaje;
}