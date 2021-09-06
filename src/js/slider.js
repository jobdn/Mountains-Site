const slidesToShow = 1,
    slidesToScroll = 1;
const slider = document.querySelector('.journal__slider');
const track = document.querySelector('.journal__track');
const items = document.querySelectorAll('.slider-item');

const itemWidth = slider.clientWidth / slidesToShow;

console.log(items);

items.forEach(item => item.style.minWidth = `${itemWidth}px`);