var vm;
var scle = 20;
var veg;
var meat;
function setup() {
var canvas = createCanvas(500, 500);
canvas.parent('sketch-holder');
vm = new VeggieMan();
frameRate(10);
pickLocation();
}

function pickLocation() {
  var cols = floor(width/scle);
  var rows = floor(height/scle);
  meat = createVector(floor(random(cols)), floor(random(rows)));
  meat.mult(scle);
  veg = createVector(floor(random(cols)), floor(random(rows)));
  veg.mult(scle);
}
function draw() {
  background(51);
  vm.death();
  vm.update();
  vm.show();
  if (vm.eat(veg)) {
     pickLocation();
  };

  if (vm.eatMeat(meat)) {
     pickLocation();
  };
  fill(64, 255, 0);
  rect(veg.x, veg.y, scle, scle);

  fill(255, 0, 0);
  rect(meat.x, meat.y, scle, scle);

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      vm.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
      vm.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
      vm.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
      vm.dir(-1, 0);
  }
}

function action(keyCode) {
  if (keyCode === "up") {
      vm.dir(0, -1);
  } else if (keyCode === "down") {
      vm.dir(0, 1);
  } else if (keyCode === "right") {
      vm.dir(1, 0);
  } else if (keyCode === "left") {
      vm.dir(-1, 0);
  }

}
