const menuToggle = document.getElementById("menu__toggle"); /* ищу чекбокс по id */
const burgerMenu = document.getElementById("menu__box"); /* ищу список меню по id */
/*
menuToggle.onchange = function () { /!* запускаю функцию при событии onchange (активация чекбокса) *!/
    burgerMenu.classList.toggle("show"); /!* добавляем/убираем класс "show" *!/
}*/
/* переделываю в стрелочную фунцию */
menuToggle.onchange = () => {
    burgerMenu.classList.toggle("show");
}
/* скрипт вставлять в конец body!!! */