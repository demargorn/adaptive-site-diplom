'use strict';

// при нажатии на крестик pop-up закрывается
document.querySelector('.popup__close-btn').onclick = function() {
    document.querySelector('.popup').classList.add('visually-hidden');
};

// при нажатии на кнопку Escape pop-up закрывается
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.popup').classList.add('visually-hidden');
    };
});