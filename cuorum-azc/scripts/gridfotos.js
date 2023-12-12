const contenedor = document.querySelector(".grid-clases");

const clasesUrl = "https://raw.githubusercontent.com/brunocelada/Personal-Projects/main/cuorum-azc/data/clases.json";
const misionalUrl = "";

async function apiFetch(url, funcion) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      funcion(data);
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(clasesUrl, displayClases);
apiFetch(misionalUrl, displayMisional);

function displayClases(data) {
  data.images.forEach(foto => {
    let div = document.createElement("div");
    div.classList.add("contenedor-foto");

    let img = document.createElement("img");
    img.src = foto.src;
    img.alt = foto.alt;
    img.classList.add("foto");

    let p = document.createElement("p");
    p.innerHTML = foto.alt;

    div.appendChild(img);
    div.appendChild(p);

    contenedor.appendChild(div);
  });
};

function displayMisional(data){

};