const leftBtn = document.querySelector('.burgers-btn__left');
const rightBtn = document.querySelector('.burgers-btn__right');
const elementBlockSlide = document.querySelector('.burgers__item');

var lastElement = 2000;
var firstElement = 0;
var step = 947;

var counterStep = 0;

rightBtn.addEventListener('click', function(){
  if(counterStep < lastElement){
    counterStep += step;
    elementBlockSlide.style.right = counterStep + "px";
  }
});

leftBtn.addEventListener('click', function(){
  if(counterStep > firstElement){
    counterStep -= step;
    elementBlockSlide.style.right = counterStep + "px";
  }
});