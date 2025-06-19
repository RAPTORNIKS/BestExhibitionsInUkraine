// Можна додати загальні скрипти для всіх сторінок
document.addEventListener('DOMContentLoaded', function() {
    // Ініціалізація активного посилання в навігації
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Інші загальні скрипти...
});