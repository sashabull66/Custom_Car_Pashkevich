let slidesCollection2 = document.querySelectorAll('.reviews__item'); /* добавляю в массив все слайды */
let quantitySlides2 = slidesCollection2.length; /* получаю количество слайдов для счетчика */
let slidesWidth2 = document.getElementById('reviews__line').offsetWidth; /* получаю по id ширину линии (сумма ширин всех слайдов) */
const step2 = slidesWidth2 / quantitySlides2; /* получаю шаг сдвига равный общей ширине / колличество слайдов */
let temp2 = -(step2 * 4); /* переменная счетчик -Math.round((quantitySlides2 * step2 / 2)/step2) */

document.getElementById('reviews__line').style.transition = 'none'; /* убираю анимацию для мгновенной загрузки первого слайда */
document.getElementById('reviews__line').style.left = temp2 + 'px'; /* вывожу на экран ~ средний слайд */

function reviews (direction) {
    document.getElementById('reviews__line').style.transition = ''; /* возвращаю анимацию из CSS */
    leftPosition = parseInt(getComputedStyle(document.getElementById('reviews__line')).left, 10); /* проверяю текущее положение линии с слайдерами относительно данных в стилях left и перевожу это в численное значение */
    minLeft = -(slidesWidth2 - step2 * 2); /* минимальное положение слайдера влево */


    if (leftPosition > minLeft && direction === 1) { /* право */ /* при клике на кнопку left выполняется это условие */
        temp2 = temp2 - step2;
        document.getElementById('reviews__line').style.left = temp2 + 'px';
    } else if (leftPosition <= -step2 && direction === 2) { /* лево */
        temp2 = temp2 + step2;
        document.getElementById('reviews__line').style.left = temp2 + 'px';
    } else if (leftPosition === 0 && direction === 2) { /* лево left=0 */
        temp2 = minLeft
        document.getElementById('reviews__line').style.left = temp2 + 'px';
    } else { /* право при left = минимальное возможное значение minLeft */
        temp2 = 0;
        document.getElementById('reviews__line').style.left = temp2 + 'px';
    }
}

