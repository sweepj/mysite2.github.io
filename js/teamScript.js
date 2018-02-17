const elementsAcco = document.querySelectorAll('.team__acco-item');
const acco = document.querySelectorAll('.team__acco-cause');
var ulAcco = document.querySelector('.team__acco');

 ulAcco.onclick = function(event){
    var target = event.target;
    console.log(target);
    for(var i = 0; i < elementsAcco.length; i++){
        if(target.parentNode.className === elementsAcco[i].className){
            elementsAcco[i].classList.add("team__acco-item--active"); 
        }
        else{
            elementsAcco[i].classList.remove("team__acco-item--active");
        }
    }
};

