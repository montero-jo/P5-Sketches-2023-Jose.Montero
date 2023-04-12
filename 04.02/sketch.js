let angle = 0
let c;

function setup(){
    createCanvas(1000,1000, WEBGL)
    colorMode(HSB)
    angleMode(DEGREES)
}

function draw(){
background (0)
rectMode(CENTER)

rotateX(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rectMode(CENTER)
rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rectMode(CENTER)
rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)


rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rectMode(CENTER)
rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

rectMode(CENTER)
rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)


rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)


rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)


rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)


rotateZ(angle)
noStroke()
fill (255)
rect(250,250,250,250)

let o = constrain (angle, 1,1.1)
let p = constrain (mouseX, 0.1,3)

rotateZ(o)
noStroke()
fill (255)
rect(250,250,250,250)

angle += p

}

function mousePressed() {
    saveCanvas(c,"png")
    }