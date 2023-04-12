

function setup(){

    createCanvas(1000,1000)
    background(0)
    colorMode(HSB)
    frameRate(60)
    rectMode(CENTER)
    angleMode(DEGREES)

}

function draw(){

    f = constrain (mouseY/2,0,150)
    background(0)

    stroke(random(200,244),100,60);
    strokeWeight(f+random(0,20))

    line(0,0,1000,1000);
    line(1000,0,0,1000);

    line(500,0,0,500);
    line(500,0,750,250)

    line(0,500,500,1000)
    line(500,1000,750,750)


}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
    }