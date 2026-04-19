const labels = ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25'];

const dadosCpu = [45, 52, 60, 75, 68, 80];
const dadosRam = [55, 58, 62, 64, 67, 70];
const dadosDisco = [78, 78, 79, 79, 80, 81];
const dadosUpload = [2.1, 2.8, 3.2, 4.0, 3.5, 4.3];
const dadosDownload = [5.4, 6.1, 7.0, 8.2, 7.6, 9.1];

// CPU
new Chart(document.getElementById('graficoCpu'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'CPU (%)',
      data: dadosCpu,
      borderColor: 'blue',
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
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
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Disco
new Chart(document.getElementById('graficoDisco'), {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Disco (%)',
      data: dadosDisco,
      backgroundColor: '',
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
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
      },
      {
        label: 'Download (MB)',
        data: dadosDownload,
        borderColor: '#36a2eb',
        backgroundColor: 'rgba(54, 162, 235, 0.12)',
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});