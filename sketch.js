var hr, mnAngle;
var mn, mnAngle;
var sc, scAngle;
var clockImg, clock;
var cirBorder1, cirB1, cirBorder2, cirB2, cirBorder3, cirB3;
var bg1, bg2;

function preload(){
  
  clockImg = loadImage("Clock_background_circular.png");
  cirBorder1 = loadImage("Circular_border-1.png");
  cirBorder2 = loadImage("Circular_border-2.png");
  cirBorder3 = loadImage("Circular_border-3.png");
  bg1 = loadImage("Square themed background.jpg");
  bg2 = loadImage("LuxuryBackgorund.jpg");

}

function setup() {
  createCanvas(800, 600);

  // translate(400, 200);

  clock = createSprite(400, 300, 70, 70);
  clock.addImage(clockImg);
  clock.scale = 0.8;

  cirB1 = createSprite(400, 300, 70, 70);
  cirB1.addImage(cirBorder1);
  cirB1.scale = 0.82;

  cirB2 = createSprite(400, 300, 70, 70);
  cirB2.addImage(cirBorder2);
  cirB2.scale = 0.6;

  cirB3 = createSprite(400, 300, 70, 70);
  cirB3.addImage(cirBorder3);
  cirB3.scale = 0.43;

  createSprite();
}

function draw() {
  background(bg2);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  hrAngle = map(hr % 12, 0, 12, -90, 270);
  mnAngle = map(mn, 0, 60, -90, 270);
  scAngle = map(sc, 0, 60, -90, 270);

  // cirB2.display();
  cirB1.display();
  // cirB3.display();
  clock.display();
  // hr.display();
  // mn.display();
  // sc.display();

  push();
  translate(400, 300);
  rotate(hrAngle);
  stroke(218, 165, 32);
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();

  push();
  translate(400, 300);
  rotate(mnAngle);
  stroke(212, 175, 55);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();

  push();
  translate(400, 300);
  rotate(scAngle);
  stroke(255, 223, 0);
  strokeWeight(6);
  line(0, 0, 95, 0);
  pop();

  // translate(400, 200);
  push();
  noFill()
  stroke(255, 223, 0)
  strokeWeight(6);
  arc(400, 300, 220, 220, 270, scAngle, TWO_PI);
  pop();

  push();
  noFill()
  stroke(212, 175, 55)
  strokeWeight(6);
  arc(400, 300, 250, 250, 270, mnAngle, TWO_PI);
  pop();

  push();
  noFill()
  stroke(218, 165, 32)
  strokeWeight(6);
  arc(400, 300, 280, 280, 270, hrAngle, TWO_PI);
  pop();
}