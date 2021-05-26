let = document.getElementsByClassName("slider");


// функция для прокрутки слайда
function swipeSlider(e) {
    // swipe слайдера по X в лево
    slider.style.left = e.pageX + 'px';
    // swipe слайдера по X в право
    slider.style.right = e.pageX + 'px';
}
// отслеживаем собитие touch
slider.addEventListener("touchstart", function(e) {
    // отслеживаем собитие пермещения
    document.ontouchmove = function(e) {
        // объявляем функцию пермещения картинки
        moveSlider(e);
    }

    // Отслеживаем поднятие польца
    slider.ontouchend = function() {
        // убираем отслеживание позиции пальца
        document.ontouchmove = null;
        // убираем отслеживание нажатие пальцем
        slider.ontouchend = null;
    }
});