var numSquares= 6;
var colors= [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButton();
    setupSquares();
    reset();
}

//mode button eventlisners
function setupModeButton() {
   for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
       this.classList.add("selected"); 
       this.textContent === "Easy" ? numSquares =3: numSquares=6;
       reset();
    }); 
}
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        //add click listner to squares
        squares[i].addEventListener("click", function (){
            //grab color clicked square
            var clickedColor = this.style.background;
         // compare color to pickedcolor
            if(clickedColor === pickedColor){
                messageDisplay.textContent= "Correct!";
                resetButton.textContent= "Play Again ?";
                changeColors(clickedColor);
                h1.style.background= clickedColor;
            }
            else{
                this.style.background="#232323";
                messageDisplay.textContent= "Try again!!";
            }
        });
        
    }
}

function reset(){
    colors = generateRandomColor(numSquares);
    // pick new random color from array
    pickedColor= pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent="New Color";
    messageDisplay.textContent= "";
    // change color of sqaures
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";

        }
        
    }
    h1.style.background= "steelblue";
   
}


resetButton.addEventListener("click", function(){
    reset();
})


// Make all square color same as correctly picked square color 
function changeColors(color) {
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}
// selecting random square for color
function pickColor() {
   var random= Math.floor(Math.random() * colors.length);
   return colors[random];
}
// function to append rgb color to each square
function generateRandomColor(num) {
    var arr= [];
    for(var i=0;i<num;i++){
       arr.push(randomColor()); 
    }
    return arr;
}
// Createing random rgb color for square
function randomColor() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}