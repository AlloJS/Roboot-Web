alert('ROBOOT');

// LIST VAR

var body = document.getElementById('change-color');
var button = document.getElementById('submit');
var input = document.getElementById('input-name');
var h1 = document.getElementById('h1');
var eyesRight = document.getElementById('eye-r');
var eyesLeft = document.getElementById('eye-l');
var mouth = document.getElementById('mouth');
var head = document.getElementById('head');
var neck = document.getElementById('neck');
var bodyRobot = document.getElementById('body-robot');
var handLeft = document.getElementById('hand-l');
var handRight = document.getElementById('hand-r');
var legLeft = document.getElementById('leg-l');
var legRight = document.getElementById('leg-r');
var footLeft = document.getElementById('foot-l');
var footRight = document.getElementById('foot-r');
var armLeft = document.getElementById('arm-l');
var armRight = document.getElementById('arm-r');

//ADDEVENT TO BUTTON NAME

button.addEventListener('click',function(e){
    
    e.preventDefault();
    h1.innerHTML = 'Welcome' + " " + input.value;
});

// EVENT CLICK EYES


function toggleEyes () {

    if (this.classList.contains('red')) {

        this.classList.remove('red');
        
    } else {

        this.classList.add('red');
    }

};

eyesLeft.addEventListener('click',toggleEyes);
eyesRight.addEventListener('click',toggleEyes);

// EVENT CLICK MOUTH

mouth.addEventListener('click',function(){

    if (this.classList.contains('blue')) {

        this.classList.remove('blue');
        this.innerHTML = '++++++++++++++++++';
        
    } else if (head.classList.contains('red')){

        this.classList.add('red');
        this.innerHTML = '';

    } else if (head.classList.contains('red') && this.classList.contains('red') ){

        this.classList.add('blue');

    } 
    else {

        this.classList.add('blue');
        this.classList.remove('red');
        this.innerHTML = '';
    }

})
// EVENT CLICK BODY FOR CHANGE COLOR

body.addEventListener('click',function(){

    if (head.classList.contains('red')) {

        head.classList.remove('red');
        neck.classList.remove('red');
        bodyRobot.classList.remove('red');
        handRight.classList.remove('red');
        handLeft.classList.remove('red');
        legLeft.classList.remove('red');
        legRight.classList.remove('red');
        footLeft.classList.remove('red');
        footRight.classList.remove('red');
        armLeft.classList.remove('red');
        armRight.classList.remove('red');
        mouth.classList.remove('red');
        mouth.classList.remove('blue');
            
    } else {

        head.classList.add('red');
        neck.classList.add('red');
        bodyRobot.classList.add('red');
        handRight.classList.add('red');
        handLeft.classList.add('red');
        legLeft.classList.add('red');
        legRight.classList.add('red');
        footLeft.classList.add('red');
        footRight.classList.add('red');
        armLeft.classList.add('red');
        armRight.classList.add('red');
        mouth.classList.add('mouth');
        
    }


});

// EVENT ON CLICK OF HANDS

handLeft.addEventListener('click',function(){

h1.innerHTML = "Hi! My name is Roboot! Write your name on the input under of my head and click my other hand and I've other thing for you!";


});

handRight.addEventListener('click',function(){

    h1.innerHTML = "Bye, Bye" + " " + input.value;
    
    
});

//EVENT CLICK FOOT

footLeft.addEventListener('click',function(){

        head.classList.remove('head-2');
        
     

})
footRight.addEventListener('click',function(){

        head.classList.add('head-2');
    
})