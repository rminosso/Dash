const btnCloseChat = document.getElementById("close-chat");
const chatBody = document.querySelector(".chat-body");
const iconChat = document.getElementById("chat-icon");
const baloons = document.querySelector(".baloon");

btnCloseChat.addEventListener("click", () => {
  chatBody.style.display = "none";
  baloons.style.display = "flex";
});

iconChat.addEventListener("click", () => {
  if (chatBody.style.display === "block") {
    chatBody.style.display = "none";
    baloons.style.display = "flex";
  } else {
    chatBody.style.display = "block";
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

function ultimaMensagem() {
  const ultimaDiv = document.querySelector("#lia div:last-of-type");

  if (ultimaDiv) {
    ultimaDiv.innerHTML += "<p>Novo conteúdo aqui!</p>";
  }
}

function usuario(msg) {
  document.getElementById("you").innerHTML += `
  <span class="box-you">${msg}</span>
  <span>Você · ${obterDataHora()}</span>
  `;
}

function lia(msg) {
  document.getElementById("lia").innerHTML = `
  <span class="box-lia">${msg}</span>
  <span>Lia · ${obterDataHora()}</span>
  `;

  ultimaMensagem();
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
  const mensagem = document.getElementById("msg").value.trim();

  const input = document.getElementById("");

  if (mensagem == "" || mensagem == undefined) {
    erro("Mensagem está vazia!");
    return;
  }

  usuario(mensagem, mensagem);

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
    document.getElementById("lia").appendChild(lia(data.resposta));
  } else {
    erro(data.erro || "Ocorreu um erro inesperado.");
  }
}

const btnSend = document.getElementById("send-message");

btnSend.addEventListener("click", enviarMensagem);
