// Grupos
const grupos = ["CPU", "RAM", "DISCO", "REDE"];

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
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: "Comparação Grupo x Alertas de componentes",
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Grupos",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "Alertas",
        },
      },
    },
  },
};

const chart = document.getElementById("comparacao-grupo-alertas");

const chartJs = new Chart(chart, config, data);


  const ctx = document.getElementById('graficoHardware');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['CPU', 'RAM', 'Disco', 'Rede'],
      datasets: [{
        label: 'Dados',
        data: [36, 25, 6, 87],
        backgroundColor: 'rgba(139, 92, 246, 0.45)',
        borderColor: 'rgba(139, 92, 246, 1)',
        borderWidth: 1.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: true,
          position: 'right'
        },
        title: {
          display: true,
          text: 'Quantidade de alertas por componentes'
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: '#e5e5e5'
          }
        },
        y: {
          grid: {
            color: '#e5e5e5'
          }
        }
      }
    }
  });
