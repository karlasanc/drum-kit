//alert("Hello"); //test

//create event listener for when user clicks the button on screen on specific button
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("I got clicked!"); //test

        //console.log(this);// creates an event listener to every button and logs on console

        //this.style.color = "white"; //changes color of button to white and runs code
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);//use to make sound based on button clicked

        buttonAnimation(buttonInnerHTML); //generate animation


    });
}

//add event listeners to entire page to check for key presses
document.addEventListener("keydown", function(event){
    //alert("Key was pressed"); //test key pressing
    
    makeSound(event.key);//use function to make sound based on key

    buttonAnimation(event.key);
});

//function that makes sound based on button/key pressed
function makeSound(key){
    switch (key) {
        case "w": 
            //create html variable that stores new audio
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;//exits switch stmt
        
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "s":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default: console.log(buttonInnerHTML);
    }

}

//function that makes animation based on button/key pressed
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    //adds pressed css class to button when pressed
    activeButton.classList.add("pressed");

    //ensures the pressed class only applies for certain time so that it returns
    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);

}

// use object document model to add sound and animation to key presses and mouse clicks. 

//use of pure javascript
