let sky_size = 500; 
let border; 
let velocity = 3; 
let distance; 
let star_location_x = [];
let star_location_y = [];
let number_of_stars = 700;  
let star_distance = []
let star_size =  []; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  frameRate(10); 
  border = (windowWidth- 2*sky_size)/3; 
  
  for(i = 0; i < number_of_stars; i++){
    star_size[i] = random(2, 5);
    star_location_x[i] = random(5, sky_size+30); 
    star_location_y[i] = random(35, sky_size+30); 
    star_distance[i] = random(3, 81); 
  } 
}

function draw() {
  background(255);
  fill(0); 
  
  push()
  fill(0); 
  translate(border, 100); 
  text("When It Happens", 0, 0); 
  rect(0, 30, sky_size, sky_size); 
  
  for(i = 0; i < number_of_stars; i++){
    noStroke(); 
    fill(255, 255, 255, random(150, 255)); 
    ellipse(star_location_x[i], star_location_y[i], star_size[i]);  
  }
  pop()
 
  push()
  fill(0); 
  translate(sky_size + 2*border, 100); 
  text("When We See It", 0, 0); 
  rect(0, 30, sky_size, sky_size); 
  
  for(i = 0; i < number_of_stars; i++){
    if(frameCount > star_distance[i]/velocity * 100){
      noStroke(); 
      fill(255, 255, 255, random(150, 255)); 
      ellipse(star_location_x[i], star_location_y[i], star_size[i]); 
    }
  } 
   
  pop();
  
}
