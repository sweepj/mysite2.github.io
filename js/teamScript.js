const elementsAcco = document.querySelectorAll('.team__acco-item');
var ulAcco = document.querySelector('.team__acco');

 ulAcco.onclick = function(event){
    var target = event.target;
    for(var i = 0; i < elementsAcco.length; i++){
        if(target.parentNode === elementsAcco[i]){
            elementsAcco[i].classList.add("team__acco-item--active"); 
        }
        else{
            elementsAcco[i].classList.remove("team__acco-item--active");
        }
    }
};

