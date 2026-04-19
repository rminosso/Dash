document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista_displays");
  const referencia = document.getElementById("primeiro_item");

  let html = "";

  for (let i = 0; i <= 50; i++) {

    html += `
        <tr id="d-${i + 1}" onclick="abrirDashboard(${i + 1})">
        <td class="data-hora">05 de abr. 2026 às 14:35:26</td>
            <td>D${i + 1}</td>
            <td class="tipo-container">
                <div class="g-tipo">
                    <span id="nivel">Crítico</span>
                </div>
            </td>
            
            <td>São Paulo - Metrô/Linha 4</td>
            <td class="tipo-container">
                <div class="g-tipo">
                    <div class="tipo"></div>
                    <span>Alto uso de RAM</span>
                </div>
            </td>
        <td class="marcar">
  <div class="marcar-container">
    <button class="btn-marcar" onclick="marcarMenu(event, this)">
      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M5 0L27 0C29.7618 0 32 2.2382 32 5L32 26C32 28.7618 29.7618 31 27 31L5 31C2.2382 31 0 28.7618 0 26L0 5C0 2.2382 2.2382 0 5 0L5 0Z"
            fill="#FFFFFF" />
          <g transform="translate(5.5 13)">
            <path d="M2.5 0C3.8809 0 5 1.1191 5 2.5C5 3.8809 3.8809 5 2.5 5C1.1191 5 0 3.8809 0 2.5C0 1.1191 1.1191 0 2.5 0Z" fill="#1E0B36" />
            <path d="M2.5 0C3.8809 0 5 1.1191 5 2.5C5 3.8809 3.8809 5 2.5 5C1.1191 5 0 3.8809 0 2.5C0 1.1191 1.1191 0 2.5 0Z" fill="#1E0B36" transform="translate(8 0)" />
            <path d="M2.5 0C3.8809 0 5 1.1191 5 2.5C5 3.8809 3.8809 5 2.5 5C1.1191 5 0 3.8809 0 2.5C0 1.1191 1.1191 0 2.5 0Z" fill="#1E0B36" transform="translate(16 0)" />
          </g>
        </g>
      </svg>
    </button>

    <div class="marcar-drop">
      <div class="item">Marcar como lida</div>
      <div class="item">Excluir</div>
    </div>
  </div>
</td>
        `;
  }

  const template = document.createElement("template");

  template.innerHTML = html;

  referencia.after(template.content);
});

function marcarMenu(event, botao) {
  event.stopPropagation();

  const menu = botao.nextElementSibling;
  const todosMenus = document.querySelectorAll(".marcar-drop");

  todosMenus.forEach((item) => {
    if (item !== menu) {
      item.classList.remove("ativo");
    }
  });

  menu.classList.toggle("ativo");
}




