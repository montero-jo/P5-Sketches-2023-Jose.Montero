let x, y;
let distortion;

function setup() {
createCanvas(1000, 1000);
colorMode(HSL)
textSize(600)
textAlign(CENTER,CENTER)
x = width/2;
y = height/2;
distortion = 0;
frameRate(120)
background(0)
}

function preload() {
    ourFont = loadFont('zerb.ttf');
}


function draw() {
    textFont(ourFont)

    cx = constrain(x,-10,10)
    cy = constrain(y,-10,10)

    noFill()
    stroke(random(100,255), random(100), random(0,100))
    strokeWeight(random(0,1))
    text("C",x, y);

    x += random(-2, 2)
    y += random(-2, 2)
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
    }