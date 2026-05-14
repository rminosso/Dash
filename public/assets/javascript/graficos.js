// grafico throughput
const labels = ['29s', '24s', '19s', '14s', '9s', '4s'];

const dlEth0 = [5.4, 6.1, 7.0, 8.2, 7.6, 9.1];
const ulEth0 = [2.1, 2.8, 3.2, 4.0, 3.5, 4.3];
const dlWlan = [4.2, 5.0, 4.8, 6.5, 5.9, 7.0];
const ulWlan = [1.5, 2.0, 1.8, 2.5, 2.2, 3.0];

// grafico conexoes
const labelsConexoes = ['ESTABLISHED', 'LISTEN', 'TIME_WAIT', 'CLOSE_WAIT', 'SYN_SENT'];

const Conexoes = [42, 12, 15, 5, 2];

const CONN_COLORS = ['#6D33FF', '#3DD68C', '#FFB547', '#FF4D6A', '#4A9EFF'];


new Chart(document.getElementById('graficoTp'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{label: 'eth0 ↓',
        data: dlEth0,
        borderColor: '#6D33FF',
        backgroundColor: '#6D33FF' + '14',
        fill: true,
        tension: 0.4, 
        borderWidth: 1.8,
        pointRadius: 0
      },
      {
        label: 'eth0 ↑',
        data: ulEth0,
        borderColor: '#4A9EFF',
        borderDash: [5, 4], 
        fill: false,
        tension: 0.4,
        borderWidth: 1.8,
        pointRadius: 0
      },
      {
        label: 'wlan0 ↓',
        data: dlWlan,
        borderColor: '#3DD68C',
        backgroundColor: '#3DD68C' + '14',
        fill: true,
        tension: 0.4,
        borderWidth: 1.8,
        pointRadius: 0
      },
      {
        label: 'wlan0 ↑',
        data: ulWlan,
        borderColor: '#FFB547',
        borderDash: [5, 4],
        fill: false,
        tension: 0.4,
        borderWidth: 1.8,
        pointRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true,
        position: 'top',
       }, 
    },
    scales: {
      x: {
        ticks: { color: '#9B9B9B', font: { size: 9 } },
        grid: { color: 'rgba(0,0,0,0.05)' }
      },
      y: {
        beginAtZero: true,
        max: 14,
        ticks: { 
          color: '#9B9B9B', 
          font: { size: 9 },
          callback: (value) => value + ' MB/s' 
        },
        grid: { color: 'rgba(0,0,0,0.06)' }
      }
    }
  }
});

// RAM
new Chart(document.getElementById('graficoCon'), {
  type: 'bar', 
  data: {
    labels: labelsConexoes,
    datasets: [{
      label: 'Conexões',
      data: Conexoes,
      backgroundColor: CONN_COLORS, 
      borderRadius: 4,
      barThickness: 12, 
    }]
  },
 options: {
    indexAxis: 'y', 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 50, 
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: { color: '#9B9B9B', font: { size: 10 } }
      },
      y: {
        grid: { display: false },
        ticks: { 
          color: '#4A4A4A', 
          font: { size: 11, weight: '700' } 
        }
      }
    }
  }
});
