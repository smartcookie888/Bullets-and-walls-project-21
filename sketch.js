var bullet1, bullet2, wall1, wall2;
var speed, weight, speed2, weight2, wall1thickness, wall2thickness;
function setup() {
  createCanvas(1600,600);
  wall1thickness = random(22, 83);
  wall2thickness = random(22, 83);
  wall1 = createSprite(1500, 200, wall1thickness, height/3)
  bullet1 = createSprite(50, 200, 25, 12)
  wall2 = createSprite(1500, 500, wall2thickness, height/3)
  bullet2 = createSprite(50, 500, 25, 12)
  speed = random(223, 321);
  weight = random(30, 52);
  speed2 = random(223, 321);
  weight2 = random(30, 52);
  bullet1.velocityX = speed / 3;
  bullet2.velocityX = speed2 / 3;
}

function draw() {
  background(255,255,255);
  if (wall1.x - bullet1.x < (bullet1.width + wall1.width) / 2){
    bullet1.velocityX = 0;
    var dmg = (0.5 * weight * speed * speed) / (wall1thickness * wall1thickness * wall1thickness);
    if (dmg >= 10){
      bullet1.shapeColor = color(255, 0, 0)
    }else if (dmg < 10){
      bullet1.shapeColor = color(0, 255, 0)
    }}
  if (wall2.x - bullet2.x < (bullet2.width + wall1.width) / 2){
    bullet2.velocityX = 0;
    var dmg = (0.5 * weight * speed * speed) / (wall1thickness * wall1thickness * wall1thickness);
    if (dmg >= 180){
      bullet2.shapeColor = color(255, 0, 0)
    }else if (dmg < 100){
      bullet2.shapeColor = color(0, 255, 0)
    }}
  drawSprites();
}