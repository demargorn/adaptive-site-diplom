'use strict';

// по нажатию на крестик pop-up закрывается
document.querySelector('.popup__close-btn').onclick = function() {
    document.querySelector('.popup').classList.add('visually-hidden');
};