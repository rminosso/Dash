const btn = document.getElementById("drop-icon");

const drop = document.getElementById("drop-v");

btn.addEventListener("click", () => {
  drop.classList.toggle("hidden");
});

// Mudar visualização para mapa
const mapaBtn = document.getElementById("map-btn");

// tabela
const table = document.getElementById("table-displays");

// Mapa HTML
let mapaHtml = `<div id="map"></div>`;

// Evento de clicar e abrir o mapa
mapaBtn.addEventListener("click", () => {
  table.innerHTML = mapaHtml;
  carregarMapa();
});
