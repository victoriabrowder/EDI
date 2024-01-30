let gif;

function preload(){
  gif = loadImage('assets/VictoriaGIF80px.gif'); //dimensions 80 by 80 px
}
function setup() { //runs once
  createCanvas(windowWidth, windowHeight);
  cursor('assets/explode.png');
  fill('magenta');
  strokeWeight(0);

}

function draw() {
  

  var num = 20; //varibale for number of squares in array 
  
  var sideLen = windowWidth/num; //variable for side length of each square
  
  for(y = 0; y < 2 * windowHeight; y = y + sideLen) {
     // loop to create rows of squares in the y direction
    
  
  for(x = 0; x < 2* windowWidth; x = x + sideLen){ // loop to create rows of squares in the x direction
  
  quad(x,y,
      x + sideLen,y,
      x + sideLen,y + sideLen,
      x, y + sideLen);
    
   image(gif, x + (sideLen/2 - 40), y + (sideLen/2 - 40));
  }
  }
  
}

function widowResized(){
  resizeCanvas (windowWidth, windowHeight);
}