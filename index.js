var h = document.querySelector('h2');
var inc = document.querySelector('.increase');
var dec = document.querySelector('.decrease');
var res = document.querySelector('.reset');

function increase(){
    h2=h2+1;
}

function decrease(){
    h2=h2-1;
}

function reset(){
    console.log('clicked');

    var numberTxt = document.getElementById("number").value;
    var number = parseInt(numberTxt,10);
    

    document.querySelector('h2').style.background = 'white';
    h.textContent = number;
}

res.addEventListener('click' , reset);


