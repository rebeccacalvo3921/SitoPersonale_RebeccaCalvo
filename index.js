const buttonTheme = document.getElementById('button-theme');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.innerText = '☀️';
} else {
    body.classList.remove('dark-mode');
    themeIcon.innerText = '🌙';
}

buttonTheme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.innerText = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.innerText = '🌙';
        localStorage.setItem('theme', 'light');
    }
    
    buttonTheme.style.transform = 'scale(0.9)';
    setTimeout(() => buttonTheme.style.transform = 'scale(1)', 100);
});

const navLinks = document.querySelectorAll('.nav-link');
const menuCollassabile = document.getElementById('main-navigation');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuCollassabile && menuCollassabile.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(menuCollassabile);
            bsCollapse.hide();
        }
    });
});