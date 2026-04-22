const labels = ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25'];

const dadosCpu = [45, 52, 60, 75, 68, 80];
const dadosRam = [55, 58, 62, 64, 67, 70];
const dadosDisco = [78, 78, 79, 79, 80, 81];
const dadosUpload = [2.1, 2.8, 3.2, 4.0, 3.5, 4.3];
const dadosDownload = [5.4, 6.1, 7.0, 8.2, 7.6, 9.1];
new Chart(document.getElementById('graficoCpu'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'CPU (%)',
      data: dadosCpu,
      borderColor: 'blue',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    },
    plugins: {
      annotation: {
        annotations: {

          linhaAlerta: {
            type: 'line',
            yMin: 75,
            yMax: 75,
            borderColor: 'yellow',
            borderWidth: 2,
            label: {
              display: true,
              position: 'end'
            }
          },

          linhaCritica: {
            type: 'line',
            yMin: 90,
            yMax: 90,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              display: true,
              position: 'end'
            }
          }
        }
      }
    }
  }
});

// RAM
new Chart(document.getElementById('graficoRam'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'RAM (%)',
      data: dadosRam,
      borderColor: '#8a63ff',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    },
    plugins: {
      annotation: {
        annotations: {

          linhaAlerta: {
            type: 'line',
            yMin: 75,
            yMax: 75,
            borderColor: 'yellow',
            borderWidth: 2,
            label: {
              display: true,
              position: 'end'
            }
          },

          linhaCritica: {
            type: 'line',
            yMin: 90,
            yMax: 90,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              display: true,
              position: 'end'
            }
          }
        }
      }
    }
  }
});

// Disco
new Chart(document.getElementById('graficoDisco'), {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'RAM (%)',
      data: dadosDisco,
      backgroundColor: '',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    },
    plugins: {
      annotation: {
        annotations: {

          linhaAlerta: {
            type: 'line',
            yMin: 75,
            yMax: 75,
            borderColor: 'yellow',
            borderWidth: 2,
            label: {
              display: true,
              position: 'end'
            }
          },

          linhaCritica: {
            type: 'line',
            yMin: 90,
            yMax: 90,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              display: true,
              position: 'end'
            }
          }
        }
      }
    }
  }
});

// Rede
new Chart(document.getElementById('graficoRede'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Upload (MB)',
        data: dadosUpload,
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 99, 132, 0.12)',
        tension: 0.3
      },
      {
        label: 'Download (MB)',
        data: dadosDownload,
        borderColor: '#36a2eb',
        backgroundColor: 'rgba(54, 162, 235, 0.12)',
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      annotation: {
        annotations: {

          alerta: {
            type: 'line',
            yMin: 10,
            yMax: 10,
            borderColor: 'yellow',
            borderWidth: 2,
            label: {
              display: true,             
              position: 'end'
            }
          },

          critico: {
            type: 'line',
            yMin: 5,
            yMax: 5,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              display: true,
              position: 'end'
            }
          }

        }
      }
    }
  }
});