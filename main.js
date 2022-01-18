var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".slider-btn");
let currentSlide = 0;

var manualNav = function (manual) {
    slides.forEach((slide) => {
        if (slide.classList.contains('active')) {
            slide.classList.add('not-active');
            setTimeout(() => {
                slide.classList.remove('not-active');
            }, 2000);
        }
        slide.classList.remove('active');
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

var repeat = function () {
    var repeater = function () {
        setTimeout(() => {
            manualNav(currentSlide);
            currentSlide++;

            if (slides.length == currentSlide) {
                currentSlide = 0;
            }
            if (currentSlide >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    };
    repeater();
};
repeat();