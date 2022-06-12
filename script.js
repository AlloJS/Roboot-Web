console.log('ROBOOT');

// LIST VAR

var button = document.getElementById('submit');
var input = document.getElementById('input-name');
var h1 = document.getElementById('h1');
var eyesRight = document.getElementById('eye-r');
var eyesLeft = document.getElementById('eye-l');

//ADDEVENT TO BUTTON NAME

button.addEventListener('click',function(e){
    
    e.preventDefault();
    h1.innerHTML = 'Welcome' + " " + input.value;
});

// EVENT CLICK EYES
eyesRight.addEventListener('click',changeClass(eyesRight));

eyesLeft.addEventListener('click',changeClass(eyesLeft));

function changeClass(){
    eyesLeft.classList.add('red');
    eyesRight.classList.add('red');
}