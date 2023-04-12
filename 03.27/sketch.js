let c;
let angle = 0;

function setup() {
c = createCanvas(1000,1000)
colorMode(RGB)
angleMode(DEGREES)
background(0)
}

function preload() {
    ourFont = loadFont('dirty.otf');
}

function draw() {
rotate(angle)
noFill()
stroke(255)
textSize(angle)
textSize(100)

textFont(ourFont)


let h = map(height-mouseY, 0, 20, 0, 20)
let l = constrain(mouseX, 0, 60)

points = ourFont.textToPoints("C",100,900,500);

noStroke();


for(let i=0; i<points.length; i++) {
    let x = points[i].x+random(-10,10)
    constrain(x,0,100)
    stroke(0)
    fill(h, random(-100,100), 100)
    circle(x, points[i].y+random(-5,5),random(l))
    
}

angle = angle + mouseX;    

}


function mousePressed() {
saveCanvas(c, "fresh-sketch", "png")
}