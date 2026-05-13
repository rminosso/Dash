const ctx = document.getElementById('graficoLinha');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['00h','01h','02h','03h','04h','05h', '14h', '15h', '16h', '17h'],
        datasets: [{
            label: 'Incidentes',
            data: [1, 4, 4, 9, 7, 1, 11,11,11,1],

            borderColor: '#7B3FF2',
            backgroundColor: '#7B3FF2',

            tension: 0.3,
            fill: false,

            pointBackgroundColor: '#D9FF00',
            pointBorderColor: '#D9FF00',
            pointRadius: 4,

            borderWidth: 2
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 2
                }
            }
        }
    }
});

const ranking = document.getElementById('graficoRanking');

new Chart(ranking, {
    type: 'bar',

    data: {
        labels: ['CPU', 'RAM', 'REDE', 'DISCO', 'Outros'],

        datasets: [{
            data: [26, 22, 17, 13, 11],

            backgroundColor: '#6F2CF3',
            borderRadius: 1,
            barThickness: 18
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },

            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});