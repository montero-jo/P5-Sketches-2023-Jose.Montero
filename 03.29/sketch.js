let f = 0;
let pxs;
let img;


//recap
//sine wave
//loading images
//editing images
    //—dot pattern
    //
//video capture


let vid;

function preload() {
img = loadImage('hand.png');
}
function setup() {
    background(0)
    c = createCanvas(1000,1000)
    vid = createCapture(VIDEO)
    vid.size(1200,1000)
    vid.hide()
    
pxs = createGraphics(1000, 1000, img)
    colorMode(RGB,255);
    
  // Displays the image at point (0, height/2) at half size
  
}

function draw() {
   background(0)
   tint(255,255,255) 
   
    vid.loadPixels();

    fill(255,255,255);
    noStroke()

    let gridSize =10;   //creating a variable called gridSize and setting it to 10.

    for (let y=0;y<vid.height;y=y+gridSize) {       //creating a loop that executes 
        
        for (let x=0;x<vid.width;x=x+gridSize) {    //
            
            let index = (y * vid.width + x) 
            
            let r=vid.pixels[index];
            
            let big = map(r, 0, 255, 0, gridSize)
            
            let offset=0
           if (y % (gridSize*2) === 0) { offset=gridSize/2; }

            fill(0,random(-255,255),94)
            text("c",x, y, big)

        }    
    }

   //image(img, 0, 0, img.width, img.height);
//image(vid, 0,0)

}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
    }