const leftBtn = document.querySelector('.burgers-btn__left');
const rightBtn = document.querySelector('.burgers-btn__right');
const elementBlockSlide = document.querySelector('.burgers__item');
const container = document.querySelector('.burgers');

var lastElement = 2000;
var firstElement = 0;
var step = 947;
var stepTab = 500;
var table = 765;

if(container.offsetWidth <= table){
    console.log(container.offsetWidth);
    step = stepTab;
    lastElement = step * 2;
}

console.log(container.offsetWidth);
var counterStep = 0;

rightBtn.addEventListener('click', function(){
  if(counterStep < lastElement){
    console.log(container.offsetWidth);
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