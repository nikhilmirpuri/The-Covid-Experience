/*

This program serves as a tool for drawing the covid 19 experience.

It offers the user 4 questions to answer visually. 
I was inspired to make this drawing tool because ...

Instructions for user:

1. Read the question.
2. Click and hold to draw!
3. Press "save" when you are happy with your drawing.
4. Follow the steps 3 more times to answer all the questions.
5. Smile!

*/

let penSize = 1;
let penState = 0;


function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    if (penState == 0) {
	    line(mouseX, mouseY, pmouseX, pmouseY);
    } 
    
    if (penState == 1) {
	    ellipse(mouseX, mouseY, 10, 10);
    }
    
    if (penState == 2) {
      line(mouseX-5, mouseY-5, mouseX+5, mouseY+5);
      line(mouseX+5, mouseY-5, mouseX-5, mouseY+5);
    }
  }
}

function keyTyped() {
  if (key == 'c') {
    background(255);
  }

  if (key == 'r') {
    stroke(255, 0, 0);
  }

  if (key == 'b') {
    stroke(0, 0, 255);
  }
  
  if (key == 'x') {
    // x style pen
    penState = 2;
  }
  
  if (key == 'e') {
    // circle pen
    penState = 1;
  }
  
  if (key == 'l') {
    // connected lines
    penState = 0;
  }
}
    

      
      
      
      
      