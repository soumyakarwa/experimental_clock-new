let velocity = 3; 
let distance; 
let margin = 40;  
let star_location_x = [];
let star_location_y = [];
let number_of_stars = 1000;  
let star_distance = []
let star_size =  []; 
let sky_size;  
let sky_location;
let screen_one_location; 
let screen_two_location;
let distance_location; 
let speed_location; 
let time_location;
let explanation; 
let frame; 

function preload() {
  roboto = loadFont("Roboto.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  textFont(roboto); 
  frame = 10; 
  frameRate(frame); 
  
  sky_size = 500; 
  screen_one_location = [margin, margin]; 
  screen_two_location = [screen_one_location[0]+sky_size+margin, margin];   
  description_location = [screen_two_location[0]+sky_size+margin, margin]; 
  sky_location = [0, margin]; 
  speed_location = [0, margin+10]; 
  distance_location = [speed_location[0], speed_location[1] + 2*margin]; 
  time_location = [speed_location[0], distance_location[1] + 2*margin]; 
  explanation_location = [speed_location[0], time_location[1]+2*margin, speed_location[0]+5.5*margin, speed_location[1]+sky_size]; 

  explanation = "I've always been fascinated with the relationship between light & time. And how sometimes, the stars we see in the night sky might have already died, because they might be so far away that their light has taken years to reach us. I find it really profound that light (or waves itself) creates a difference between the time at which things happen and the time at which we are able to see them."
  
  for(i = 0; i < number_of_stars; i++){
    star_size[i] = random(2, 5);
    star_location_x[i] = random(sky_location[0], sky_location[0]+sky_size); 
    star_location_y[i] = random(sky_location[1], sky_location[1]+sky_size); 
    star_distance[i] = random(3, 180); 
  } 
}

function draw() {
  background(255);
  fill(0); 
  textSize(16); 
  
  // WHEN IT HAPPEN SCREEN
  push()
  fill(0); 
  translate(screen_one_location[0], screen_one_location[1]); 
  text("When It Happens", 0, 0); 
  rect(0, margin, sky_size, sky_size); 
  
  for(i = 0; i < number_of_stars; i++){
    noStroke(); 
    fill(255, 255, 255, random(100, 255)); 
    ellipse(star_location_x[i], star_location_y[i], star_size[i]);  
  }
  pop()
  
  // WHEN WE SEE IT SCREEN
  push()
  fill(0); 
  translate(screen_two_location[0], screen_two_location[1]); 
  text("When We See It", 0, 0); 
  rect(0, margin, sky_size, sky_size); 
  
  for(i = 0; i < number_of_stars; i++){
    if(frameCount > star_distance[i]/velocity * frame){
      noStroke(); 
      fill(255, 255, 255, random(150, 255)); 
      ellipse(star_location_x[i], star_location_y[i], star_size[i]); 
      fill(0); 
    }
  } 
  pop();
  
  // DESCRIPTION AND CALCULATIONS
  push()
  translate(description_location[0], description_location[1]);
  let distance = velocity * frameCount / frame; 
  let time = frameCount/frame; 
  if(distance > max(star_distance)){
    distance = (max(star_distance)).toFixed(1); 
  }
  if(time > max(star_distance)/velocity){
    time = (max(star_distance)/velocity).toFixed(1); 
  }
  
  textSize(12); 
  // calculations
  text("Distance From Earth:" , distance_location[0], distance_location[1]); 
  text("Speed of Light:", speed_location[0], speed_location[1]);
  text("Time Taken:", time_location[0], time_location[1]); 
  
  text(velocity + "x 10^8 m/s", speed_location[0], speed_location[1]+margin/2)
  text(+ distance + "x 10^8 m", distance_location[0], distance_location[1]+margin/2); 
  text(time + " s", time_location[0], time_location[1]+margin/2); 

  // description
  text(explanation, explanation_location[0], explanation_location[1], explanation_location[2], explanation_location[3]); 
  pop(); 

}
