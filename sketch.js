function setup() 
{
  let canvas = createCanvas(400, 400);
  let float = angleMode(DEGREES);
}

function draw() 
{
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke('#15D1F7');
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke('#45F715');
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke('#FF002E');
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke('#15D1F7');
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke('#45F715');
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke('#FF002E');
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  fill(255);
  noStroke();
  text(hr + ':' + mn + ':' + sc, 10, 195);
}