let c;
let ourFont;
let points;
let f=0;


function preload() {
    ourFont = loadFont('dirty.otf');
}

function setup() {
    c = createCanvas(1000,1000)

    colorMode(HSB,255);

}

function draw() {

    background (0)  
    textSize(100)
    textFont(ourFont);

    points = ourFont.textToPoints("C",100,500,500);

    noStroke();
    
    
    for(let i=0; i<points.length; i++) {
        stroke(0)
        fill(255)
        rect(points[i].x+random(mouseX+200,width-mouseX-200), points[i].y+random(mouseY-200,height-mouseY-200),random(5,5))
        
    }

      points = ourFont.textToPoints("C",100,240,500);

    for(let i=0; i<points.length; i++) {
        stroke(0)
        fill(255)
        rect(points[i].x+random(mouseY+200,width-mouseY-200), points[i].y+random(mouseX-200,height-mouseX-200),random(5,5))
        
    }

    points = ourFont.textToPoints("C",0,-100,500);

    for(let i=0; i<points.length; i++) {
        stroke(0)
        fill(255)
        rect(points[i].x+random(mouseX-200,width-mouseX+200), points[i].y+random(mouseX+200,height-mouseX+200),random(5,5))
        
    }

    points = ourFont.textToPoints("C",240,500,500);

    for(let i=0; i<points.length; i++) {
        stroke(0)
        fill(255)
        rect(points[i].x+random(-500,500), points[i].y+random(-500,500),random(5,5))
        
    }


    let ferb = map(mouseX, 0, 1000, 0, 255)

    fill(ferb,255,255)

    textSize(mouseY/10)
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}


function mousePressed() {
    smiley = ":D"
}