$(document).ready(function() {
    // Перевіряємо збережену тему в localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Застосовуємо тему при завантаженні сторінки
    applyTheme(currentTheme);
    
    // Додаємо кнопку перемикача теми
    addThemeSwitcher();
    
    // Обробник кліку на кнопку
    $(document).on('click', '.theme-switcher', function() {
        const current = $('body').hasClass('dark-theme') ? 'dark' : 'light';
        const newTheme = current === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    function applyTheme(theme) {
        if (theme === 'dark') {
            $('body').addClass('dark-theme');
            $('.theme-switcher').text('☀️ Світла тема');
        } else {
            $('body').removeClass('dark-theme');
            $('.theme-switcher').text('🌙 Темна тема');
        }
    }
    
    function addThemeSwitcher() {
        const switcher = $('<button>', {
            class: 'theme-switcher',
            title: 'Змінити тему'
        });
        
        // Додаємо кнопку в header
        $('header .nav-container').append(switcher);
        
        // Ініціалізуємо текст кнопки
        const currentTheme = $('body').hasClass('dark-theme') ? 'dark' : 'light';
        applyTheme(currentTheme);
    }
});