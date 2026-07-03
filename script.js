// Плавный скролл для навигации (чтобы при клике на "Каталог" плавно вело вниз)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Обработка формы (всплывающее сообщение)
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем перезагрузку страницы
        
        // Показываем красивое уведомление
        alert('Спасибо! Ваша заявка принята. Мы перезвоним вам в ближайшее время.');
        
        // Очищаем поля формы
        this.reset();
    });
}