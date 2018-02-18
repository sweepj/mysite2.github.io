const menuItems = document.querySelectorAll('.menu-burger__bg');
const menuBlockAcco = document.querySelector('.menu-burger__list');
const menuTrigger = document.querySelectorAll('.menu-burger__item');

menuBlockAcco.onclick = function(event){
  var target = event.target;
  for(var j = 0; j < menuItems.length; j++){
    if((target === menuItems[j]) || (target.parentNode === menuItems[j])){  
      menuTrigger[j].classList.add('menu__acco-active');
    }
    else{
      menuTrigger[j].classList.remove('menu__acco-active');
    }
  }
}
