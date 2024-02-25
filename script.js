/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Roman");
}

function draw() {
  background(120);
  textSize(16);
  text("What do you call a cow that is laying on the ground? ...", 20, 60);
  


if(mouseIsPressed){
  textSize(32);
  text("Ground beef", 20, 160);
}

}
