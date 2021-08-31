//Слайдер на JS
let slides = document.getElementsByClassName('slider-item');
let dots = document.querySelectorAll('.dot');
let index = 0

dots.forEach((item, idxdots) => {
    item.addEventListener('click', () => {
        index = idxdots;
        currentSlide(index);
    })
});

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDotSlide = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const currentSlide = idx => {
    activeSlide(idx);
    activeDotSlide(idx);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        currentSlide(index);
    } else {
        index ++;
        currentSlide(index);
    }
};

const prewSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        currentSlide(index);
    } else {
        index --;
        currentSlide(index);
    }
};

setInterval(() => {
    nextSlide();
}, 1500);
//Слайдер на JS

//Таймер
let partimer = document.getElementById('partime');
let timer = 1800;

const updateTimer = () => {
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60;
    seconds = seconds < 10? "0" + seconds : seconds;
    partimer.innerHTML = `${minutes}:${seconds} мин`;
    timer--;
    if (timer == 0) {
        timer = 1800;
    }
}
setInterval(() => {
    updateTimer();
}, 1000);
//Таймер

//Появление подсказок
let names = document.getElementById('name');
let tel = document.getElementById('phone');
let helpTel = document.getElementById('help-tel')
let helpName = document.getElementById('help-name')

names.addEventListener('click', () => {
    helpName.classList.add('active');
    setTimeout(() =>{
        helpName.classList.remove('active');
    }, 2000);
})

tel.addEventListener('click', () => {
    helpTel.classList.add('active');
    setTimeout(() =>{
        helpTel.classList.remove('active');
    }, 2000);
})

//Появление подсказок

//Прокрутка

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

