let c;
let f=0;

function preload() {
}

function setup() {
    c = createCanvas(1000,1000)
    colorMode(HSB,255);
    background(0)

}

function draw() {

    fill(mouseX, mouseY, 255)
    f=f+1; 
    ellipse(500,500, noise(f)*mouseX)

    fill(0)
    f=f+1;  
    ellipse(500,500, noise(f)*mouseX)

    fill(0)
    f=f+1;  
    rect(250,250, noise(f)*mouseX)
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}

