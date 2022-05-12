let slider = document.querySelector('.slider'),
    slide = slider.querySelectorAll('.slider-box__item'),
    slideText = document.querySelector('.slider-box__item-descr'),
    btn = slider.querySelectorAll('.slider-btn');

function hideSlide() {
    slide.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('active');
        item.style.transform = 'none';
    })
    btn.forEach(item => {
        item.classList.remove('active')
    })
    slideText.classList.remove('active');
    slideText.classList.add('hide');
}

function showSlide(i = 0) {
    slide[i].classList.remove('hide');
    slide[i].classList.add('active');
    slideText.textContent = slide[i].getAttribute('data-mem');
    slideText.classList.remove('hide');
    setTimeout(() => {
        slideText.classList.add('active');
    }, 300)
    btn[i].classList.add('active');
}

hideSlide();
showSlide();
slider.addEventListener('click', (e) => {
    if (e.target && e.target.matches('div.slider-btn')) {
        btn.forEach((item, i) => {
            if (e.target == item) {
                hideSlide();
                showSlide(i);
            }
        })
    }
})