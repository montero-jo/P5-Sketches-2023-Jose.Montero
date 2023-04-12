var x;
var changeDirection;

function setup() {
  createCanvas(1000, 1000);
	x = 1;
	changeDirection = false;
    colorMode(RGB)
    noStroke()
    rectMode(CENTER)
    frameRate(60)
}

function draw() {
  background(0);
    
    fill(random(100,120),100,255)
rect(x,0,100);
	if(x>width){
		changeDirection=true}

	else if (x<=0){
		changeDirection=false}

	if (x>=-100 && changeDirection == false){
		x=x+100}

	else if(changeDirection == true){
		x=x-100}

rect(x,100,100);
	if(x>width){
		changeDirection=true}

	else if (x<=0){
		changeDirection=false}

	if (x>=-100 && changeDirection == false){
		x=x+100}

	else if(changeDirection == true){
		x=x-100}
        
rect(x,200,100);
	if(x>width){
		changeDirection=true}

	else if (x<=0){
		changeDirection=false}

	if (x>=-100 && changeDirection == false){
		x=x+100}

	else if(changeDirection == true){
		x=x-100}    

rect(x,300,100);
	if(x>width){
		changeDirection=true}

	else if (x<=0){
		changeDirection=false}

	if (x>=-100 && changeDirection == false){
		x=x+100}

	else if(changeDirection == true){
		x=x-100}    

rect(x,400,100);
    if(x>width){
            changeDirection=true}
    
    else if (x<=0){
            changeDirection=false}
    
    if (x>=-100 && changeDirection == false){
            x=x+100}
    
    else if(changeDirection == true){
            x=x-100}    
    
rect(x,500,100);
    if(x>width){
            changeDirection=true}
            
    else if (x<=0){
            changeDirection=false}
            
    if (x>=-100 && changeDirection == false){
    x=x+100}
                
    else if(changeDirection == true){
            x=x-100}    

rect(x,600,100);
    if(x>width){
            changeDirection=true}
            
    else if (x<=0){
            changeDirection=false}
            
    if (x>=-100 && changeDirection == false){
    x=x+100}
                
    else if(changeDirection == true){
            x=x-100}

rect(x,700,100);
    if(x>width){
            changeDirection=true}
            
    else if (x<=0){
            changeDirection=false}
            
    if (x>=-100 && changeDirection == false){
    x=x+100}
                
    else if(changeDirection == true){
            x=x-100}    

            rect(x,500,100);
    if(x>width){
            changeDirection=true}
            
    else if (x<=0){
            changeDirection=false}
            
    if (x>=-100 && changeDirection == false){
    x=x+100}
                
    else if(changeDirection == true){
            x=x-100}            
 
rect(x,800,100);
    if(x>width){
            changeDirection=true}
            
    else if (x<=0){
            changeDirection=false}
            
    if (x>=-100 && changeDirection == false){
    x=x+100}
                
    else if(changeDirection == true){
            x=x-100}   

rect(x,900,100);
    if(x>width){
            changeDirection=true}
            
    else if (x<=0){
            changeDirection=false}
            
    if (x>=-100 && changeDirection == false){
    x=x+100}
                
    else if(changeDirection == true){
            x=x-100} 
            
            rect(x,1000,100);
    if(x>width){
            changeDirection=true}
            
    else if (x<=0){
            changeDirection=false}
            
    if (x>=-100 && changeDirection == false){
    x=x+100}
                
    else if(changeDirection == true){
            x=x-100}


    
    rect(500,300,100);
    rect(400,300,100);
    rect(300,400,100);
    rect(300,500,100);
    rect(300,600,100);
    rect(400,700,100);
    rect(500,700,100);
    rect(600,700,100);
    rect(600,300,100);
    rect(700,400,100);
    rect(700,600,100);
    
}