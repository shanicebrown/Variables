

var sameColor;
var rectangle;
var elli;

function setup () {
  createCanvas(400, 400);

  var r = random(50, 75);
  var b = random(0, 2200);
  var g = random(100, 255);
  sameColor = color(r,b,g);
 rectangle = 0;
 elli = 0
  
}

function draw () {
    background(250);
  
 
  rect(mouseX, mouseY,10, 50);
  fill(sameColor);
  noStroke();
  rect(rectangle,20,50,50);
  rectangle = rectangle + 5;
  
  ellipse(mouseX, mouseY,50,50);
  fill(sameColor);
  noStroke();
  fill(50,100,84);
  ellipse(elli,20,10,10);
  elli = elli + 5;
}

//function mousePressed(){
    
  //background(250);
  //color(255);
  //ellipse(mouseX, mouseY, 20, 20);

 // }
  

