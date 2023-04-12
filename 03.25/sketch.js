let c;

function setup (){
    createCanvas(1000,1000)
    background(0)
    colorMode(HSB, 255)
}

function draw (){

console.log(mouseX)

noStroke(0)

let phineas = map(mouseY, 0, 1000, 0, 255)
let ferb = map(mouseX, 0, 1000, 0, 255)
fill(ferb,100,175)
ellipse(mouseX, mouseY, 250)

fill(phineas,100,175)
ellipse(500, mouseY, 350)

fill(0)
ellipse(mouseX,500,250)

rect(mouseY, mouseX-25, 200, 175)
}

function mousePressed(){
    saveCanvas (c, "PNG",)
}

