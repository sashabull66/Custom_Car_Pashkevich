let slidesCollection = document.querySelectorAll('.slider__item'); /* добавляю в массив все слайды */
let quantitySlides = slidesCollection.length; /* получаю количество слайдов для счетчика */
let slidesWidth = document.getElementById('slider__line').offsetWidth; /* получаю по id ширину линии (сумма ширин всех слайдов) */
const step = slidesWidth / quantitySlides; /* получаю шаг сдвига равный общей ширине / колличество слайдов */
let temp = -(step * 4); /* переменная счетчик -Math.round((quantitySlides * step / 2)/step) */
console.log(temp);

document.getElementById('slider__line').style.transition = 'none'; /* убираю анимацию для мгновенной загрузки первого слайда */
document.getElementById('slider__line').style.left = temp + 'px'; /* вывожу на экран ~ средний слайд */

function control(direction) {
    document.getElementById('slider__line').style.transition = ''; /* возвращаю анимацию из CSS */
    leftPosition = parseInt(getComputedStyle(document.getElementById('slider__line')).left, 10); /* проверяю текущее положение линии с слайдерами относительно данных в стилях left и перевожу это в численное значение */
    minLeft = -(slidesWidth - step * 2); /* минимальное положение слайдера влево */


    if (leftPosition > minLeft && direction === 1) { /* право */ /* при клике на кнопку left выполняется это условие */
        temp = temp - step;
        document.getElementById('slider__line').style.left = temp + 'px';
    } else if (leftPosition <= -step && direction === 2) { /* лево */
        temp = temp + step;
        document.getElementById('slider__line').style.left = temp + 'px';
    } else if (leftPosition === 0 && direction === 2) { /* лево left=0 */
        temp = minLeft
        document.getElementById('slider__line').style.left = temp + 'px';
    } else { /* право при left = минимальное возможное значение minLeft */
        temp = 0;
        document.getElementById('slider__line').style.left = temp + 'px';
    }
}

