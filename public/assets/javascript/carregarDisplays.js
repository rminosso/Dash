document.addEventListener("DOMContentLoaded", () => {

    const lista = document.getElementById('lista_displays');
    const referencia = document.getElementById('primeiro_item');

    let html = ""

    for (let i = 0; i <= 50; i++) {
        html += `
        <tr>
        <td class="id-display">D123</td>
        <td>192.168.171.13</td>
        <td class="mac">00:19:B9:FB:E2:58</td>
        <td>São Paulo - Metrô/Linha 4</td>
        <td class="status-container">

        <div class="g-status">
        <div class="status"></div>
        <span>Online</span>
        </div>

        </td>
        <td>100%</td>
        <td>
        <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
        <path
        d="M5 0L27 0C29.7618 0 32 2.2382 32 5L32 26C32 28.7618 29.7618 31 27 31L5 31C2.2382 31 0 28.7618 0 26L0 5C0 2.2382 2.2382 0 5 0L5 0Z"
        fill="#FFFFFF" />
        <g transform="translate(5.5 13)">
        <path
        d="M2.5 0L2.5 0C3.8809 0 5 1.1191 5 2.5L5 2.5C5 3.8809 3.8809 5 2.5 5L2.5 5C1.1191 5 0 3.8809 0 2.5L0 2.5C0 1.1191 1.1191 0 2.5 0L2.5 0Z"
        fill="#1E0B36" />
        <path
        d="M2.5 0L2.5 0C3.8809 0 5 1.1191 5 2.5L5 2.5C5 3.8809 3.8809 5 2.5 5L2.5 5C1.1191 5 0 3.8809 0 2.5L0 2.5C0 1.1191 1.1191 0 2.5 0L2.5 0Z"
        fill="#1E0B36" transform="translate(8 0)" />
        <path
        d="M2.5 0L2.5 0C3.8809 0 5 1.1191 5 2.5L5 2.5C5 3.8809 3.8809 5 2.5 5L2.5 5C1.1191 5 0 3.8809 0 2.5L0 2.5C0 1.1191 1.1191 0 2.5 0L2.5 0Z"
        fill="#1E0B36" transform="translate(16 0)" />
        </g>
        </g>
        </svg>
        </td>
        </tr>
        `;
    }

    const template = document.createElement('template');

    template.innerHTML = html;

    referencia.after(template.content);


})

