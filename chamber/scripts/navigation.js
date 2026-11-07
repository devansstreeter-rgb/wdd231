const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
const darkMode = document.querySelector('#darkmode');

navButton.addEventListener('click', () => {
    const isOpen = navButton.classList.toggle('show');
    navButton.setAttribute('aria-expanded', isOpen);
    navBar.classList.toggle('show');
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
});