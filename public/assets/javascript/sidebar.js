const button = document.querySelector('.icon');
const sidebar = document.querySelector('.sidebar');
const logo = document.getElementById('logo');

button.addEventListener('click', () => {
    sidebar.classList.toggle('reduced');
});