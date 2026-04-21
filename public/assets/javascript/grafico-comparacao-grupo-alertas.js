// Grupos
const grupos = ["Grupo A", "Grupo B", "Grupo C", "Grupo D"];

// Valores - 1CPU, 2[RAM], 3[RAM], 4[Rede]
const valores = [
  [10, 15, 22, 23],
  [20, 25, 32, 35],
  [30, 35, 52, 34],
  [25, 30, 35, 18],
];

// Dados
const data = {
  labels: grupos,
  datasets: [
    {
      label: grupos[0],
      backgroundColor: "#fa2d37",
      data: valores[0],
    },
    {
      label: grupos[1],
      backgroundColor: "#36a2eb",
      data: valores[1],
    },
    {
      label: grupos[2],
      backgroundColor: "#ffce57",
      data: valores[2],
    },
    {
      label: grupos[3],
      backgroundColor: "#4bbfbf",
      data: valores[3],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#1e0b36",
        },
      },
      title: {
        display: true,
        text: "Comparação Grupo x Alertas de componentes",
        align: "start",
        color: "#6d33ff",
        font: {
          size: 18,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "#1e0b36",
        },
        stacked: true,
      },
      y: {
        ticks: {
          color: "#1e0b36",
        },
        stacked: true,
      },
    },
  },
};

const chart = document.getElementById("comparacao-grupo-alertas");

const chartJs = new Chart(chart, config, data);
