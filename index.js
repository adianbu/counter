var h = document.querySelector('h2');
var inc = document.querySelector('.increase');
var dec = document.querySelector('.decrease');
var res = document.querySelector('.reset');
var s = -1;

var increasefunction = setInterval(()=>
{
  if(s== 0)
  {
    //if only code below is executed : one click will add 1 to the current value 
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    document.getElementById('number').textContent = value;
  }
},1000);

var decreasefunction = setInterval(()=>
{
  if(s == 1)
  {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
    document.getElementById('number').textContent = value;
  }
},1000);

function increase(){
    s=0;
    console.log("clicked increase");
    increasefunction(); 
    clearInterval(increasefunction);
}

function decrease(){
    s=1;
    decreasefunction();
    clearInterval(decreasefunction);

}


function reset(){
    s=-1;
    console.log('reset clicked');
    document.getElementById('number').value = 0;
    document.getElementById('number').textContent = 0;
    
}

res.addEventListener('click' , reset);
inc.addEventListener('click',increase);
dec.addEventListener('click',decrease);



