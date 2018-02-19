const reviewsEvent = document.querySelector('.reviews__list');
const openBtns = document.querySelectorAll('.reviews__comment-detail');
const titleReviews = document.querySelectorAll('.reviews__comment-title');
const textReviews = document.querySelectorAll('.reviews__comment-text');
var elementClick;

reviewsEvent.onclick = function(event){
  var target = event.target
  for(var i = 0; i < openBtns.length; i++){
    if(target === openBtns[i]){
      elementClick = openBtns[i];
      document.body.appendChild(openOverlay(i));
    }
  } 
}

function openOverlay(count){

  let overlayElem = document.createElement('div');
  overlayElem.classList.add('reviews__overlay');

  let temp = document.querySelector('.overlayTemp');
  overlayElem.innerHTML = temp.innerHTML;

  let closeBtn = overlayElem.querySelector('.overlay-close');
  closeBtn.addEventListener('click', function(){
  document.body.removeChild(overlayElem);
  });

  var contentElem = overlayElem.querySelector('.title-overlay');
  contentElem.innerHTML = titleReviews[count].innerHTML;


  var contentElem = overlayElem.querySelector('.text-overlay');
  contentElem.innerHTML = textReviews[count].innerHTML

  return overlayElem;
}