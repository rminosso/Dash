const button = document.querySelector('.icon');
const sidebar = document.querySelector('.sidebar');

button.addEventListener('click', () => {
    button.classList.toggle('invert');

    if (sidebar.classList.contains('grow')) {
        sidebar.classList.remove('grow');
        sidebar.classList.add('reduce');
    } else {
        sidebar.classList.remove('reduce');
        sidebar.classList.add('grow');
    }
});