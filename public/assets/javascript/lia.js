const btnCloseChat = document.getElementById("close-chat");
const chatBody = document.querySelector(".chat-body");
const iconChat = document.getElementById("chat-icon");
const baloons = document.querySelector(".baloon");

btnCloseChat.addEventListener("click", () => {
  chatBody.style.display = "none";
  baloons.style.display = "flex";
});

iconChat.addEventListener("click", () => {
  if (chatBody.style.display === "flex") {
    chatBody.style.display = "none";
    baloons.style.display = "flex";
  } else {
    chatBody.style.display = "flex";
    baloons.style.display = "none";
  }
});

const divError = document.getElementById("error");

const msgErroSpan = divError.querySelector("span");

function obterDataHora() {
  const data = new Date();
  let dia = data.getDate();
  let mesExtenso = data.toLocaleDateString("pt-BR", { month: "long" });
  let ano = data.getFullYear();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  let horaFormatada = hora < 10 ? `0${hora}` : hora;
  let minutosFormatado = minutos < 10 ? `0${minutos}` : minutos;

  let dataHora = `${dia} de ${mesExtenso} de ${ano} às ${horaFormatada}:${minutosFormatado}`;

  return dataHora;
}

function pegarUltimaMensagem() {
  return document.querySelector(".scroll > div:last-of-type");
}

function usuario(msg) {
  let html = `
  <div class="you-box">
  <span class="box-you">${msg}</span>
  <span>Você · ${obterDataHora()}</span>
  </div>
  `;

  const referencia = pegarUltimaMensagem();
  const containerPrincipal = document.getElementById(".scroll");

  if (referencia instanceof Element) {
    referencia.insertAdjacentHTML("afterend", html);
  } else {
    containerPrincipal.insertAdjacentHTML("beforeend", html);
  }
}

function lia(msg) {
  let html = `
  <div class="lia-box" id="lia">
  <span class="box-lia">${msg}</span>
  <span>Lia · ${obterDataHora()}</span>
  </div>
  `;

  const referencia = pegarUltimaMensagem();
  const containerPrincipal = document.getElementById("lia");

  if (referencia) {
    referencia.insertAdjacentHTML("afterend", html);
  } else {
    containerPrincipal.insertAdjacentHTML("beforeend", html);
  }
}

function aguardar() {
  const area = document.getElementById("msg");
  const button = document.getElementById("send-message");
  console.log("Aguarde 10s");

  area.disabled = true;
  button.disabled = true;

  setTimeout(() => {
    area.disabled = false;
    button.disabled = false;
    console.log("Input liberada e botão liberado");
  }, 10000);
}

function erro(erro) {
  divError.style.display = "flex";
  msgErroSpan.innerHTML = `${erro}`;
  setTimeout(() => {
    divError.style.display = "none";
    msgErroSpan.innerHTML = "";
  }, 5000);
}

// Enviar mensagem
async function enviarMensagem() {
  let mensagem = document.getElementById("msg").value.trim();

  msg.value = "";

  if (mensagem == "" || mensagem == undefined) {
    erro("Mensagem está vazia!");
    return;
  }

  usuario(mensagem);

  try {
    const response = await fetch("/lia/perguntar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mensagem: mensagem,
      }),
    });

    const data = await response.json();

    console.log("Resposta: ", data.resposta);

    if (response.ok && data.resposta) {
      lia(`${data.resposta}`);
      aguardar();
    } else {
      throw new Error(data.error || data.resposta || "Erro no servidor");
    }
  } catch (error) {
    console.log(error);
    erro("Ocorreu um erro inesperado.");
  }
}

const btnSend = document.getElementById("send-message");

btnSend.onclick = async (e) => {
  e.preventDefault();
  await enviarMensagem();
};
