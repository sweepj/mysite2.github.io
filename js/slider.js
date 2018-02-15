const leftBtn = document.querySelector('.burgers-btn__left');
const rightBtn = document.querySelector('.burgers-btn__right');
const elementBlockSlide = document.querySelector('.burgers__item');

var lastElement = 300;
var firstElement = 0;
var step = 100;

var counterStep = 0;

rightBtn.addEventListener('click', function(){
  if(counterStep < lastElement){
    counterStep += step;
    elementBlockSlide.style.right = counterStep + "px";
  }
});