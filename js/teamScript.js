const elementsAcco = document.querySelectorAll('.team__acco-item');


var count;
for(var i = 0; i<=elementsAcco.length; i++){
    elementsAcco[i].addEventListener('click', function(){
       elementsAcco[i].classList.add("team__acco-item--active");
    });


}