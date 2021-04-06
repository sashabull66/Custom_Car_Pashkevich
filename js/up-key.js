window.onscroll = function () { /* выполнить при скроле*/
    const upbutton = document.getElementById('upbutton'); /* переменная в которой элемент-кнопка */
    const scrolled = window.pageYOffset || document.documentElement.scrollTop; /* переменная в которой текущее состояние скролла и текущей прокрутки*/
    if (scrolled > 100) { /* если текущее положение скролла больше 100px... */
        upbutton.style.display = 'block'; /* отображаю кнопку */
        upbutton.addEventListener('click', function () { /* навешиваю на кнопку слушателя-клика */
            window.scrollTo({top: 0, behavior: "smooth"}); /* при клике отмотать скрол в начало т перейти к else */
        })
    } else {
        upbutton.style.display = 'none'; /* после перемотки выше условие неверно -> скрыть кнопку */
    }
}