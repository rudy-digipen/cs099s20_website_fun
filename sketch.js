var x;
var y;
let size_scale = 1;
const Gravity = -9.8;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  console.log(x);
  let f00dFFFHH____$ = 'Food';
  console.log(f00dFFFHH____$);
  let color = 'green'
  let column = 40;
  let col;
  let c;
  {
    let d = 10;
    console.log(d);
  }
  // console.log(d);
}

function draw() {
  background(220);
  
  let d = 400 * size_scale;
  
  x = mouseX;
  y = mouseY;
  
  fill('yellow')
  circle(x, y, d)
  
  fill(255);
  circle(x-67*size_scale, y-67*size_scale, d/10);
  circle(x+67*size_scale, y-67*size_scale, d/10);
  fill(0);
  circle(x-67*size_scale, y-67*size_scale, d/20);
  circle(x+67*size_scale, y-67*size_scale, d/20);
  
  strokeWeight(3);
  noFill();
  arc(x, y+67*size_scale, d/2*size_scale, 90*size_scale, 0, PI);
  
  
}


function mouseWheel(event){
  console.log(event.delta);
  size_scale += event.delta / 1000;
  // size_scale = size_scale + event.delta
  
}











