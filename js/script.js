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

// закрытие pop-up при клике вне его
document.querySelector('.popup').addEventListener('click', (e) => {
    e._isClickWithInModal === true;
});
document.querySelector('.popup').addEventListener('click', (e) => {
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.add('visually-hidden');
});