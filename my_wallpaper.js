//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let dogS = 1; //dog size, dog is on line 62-400
let dogXpots = 0;
let dogYpots = 0;
let boneS = 1; //bone size, bone is on line 402-430
let boneXpots = 0;
let boneYpots = 100;
let ballS = 1; //ball & dog & bone size, ball is on 432-443
let ballXpots = 100;
let ballYpots = 120;
let colour = 'C'; //line 64-73, A is brown, B is red, C is black
let BallC = 'A'; //line 328-337, A is pink, B is blue, C is black


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


fill(189,252,210);
triangle(0,0, 30,0, 0,30);
fill(135,206,235);
triangle(0,0, 20,0, 0,20);
fill(255,192,203);
triangle(0,0, 10,0, 0,10);
//traingle

fill('#BDFCC9');
ellipse(180,100,5,5);
ellipse(20,100,5,5);
ellipse(80,85,5,5);
ellipse(30,115,5,5);
ellipse(160,98,6,6);
ellipse(70,100,10,10);


dog(dogS,dogS,dogXpots,dogYpots);
bone(boneS,boneS,boneXpots,boneYpots);
ball(ballS,ballS,ballXpots,ballYpots);


}



function dog(sx, sy, xPos, yPos){

  let c;
  if (colour == 'A'){
    c = color('#A0522D');
  }
  else if(colour == 'B'){
    c = color('#802A2A');
  }
  else if(colour == 'C'){
    c = 0;
  }
  
  push();
  translate(xPos, yPos);
  scale(sx, sy);
//Dog start
fill(255);
noStroke();
rect(70,40,60,70);

fill(c);
stroke(c);
beginShape();
curveVertex(90, 40);
curveVertex(90, 40);
curveVertex(95, 50);
curveVertex(95, 60);
curveVertex(90, 70);
curveVertex(80, 78);
curveVertex(80, 78);
endShape();

beginShape();
curveVertex(110, 40);
curveVertex(110, 40);
curveVertex(105, 50);
curveVertex(105, 60);
curveVertex(110, 70);
curveVertex(120, 78);
curveVertex(120, 78);
endShape();
//alae of the nose

beginShape();
curveVertex(90, 40);
curveVertex(90, 40);
curveVertex(70, 45);
curveVertex(70, 65);
curveVertex(90, 70);
curveVertex(90, 70);
endShape();

beginShape();
curveVertex(110, 40);
curveVertex(110, 40);
curveVertex(130, 45);
curveVertex(130, 65);
curveVertex(110, 70);
curveVertex(110, 70);
endShape();
//eye socket

beginShape();
curveVertex(85, 40);
curveVertex(85, 40);
curveVertex(64, 48);
curveVertex(62, 60);
curveVertex(62, 70);
curveVertex(64, 80);
curveVertex(66, 90);
curveVertex(64, 100);
curveVertex(63,110);
curveVertex(63,110);
endShape();

beginShape();
curveVertex(115, 40);
curveVertex(115, 40);
curveVertex(136, 48);
curveVertex(138, 60);
curveVertex(138, 70);
curveVertex(136, 80);
curveVertex(134, 90);
curveVertex(136, 100);
curveVertex(137,110);
curveVertex(137,110);
endShape();

noStroke();
triangle(80,55, 63,110, 85,88);
triangle(120,55, 137,110, 115,88);
//face

stroke(c);
beginShape();
curveVertex(63, 45);
curveVertex(63, 45);
curveVertex(75, 32);
curveVertex(100, 27);
curveVertex(125, 32);
curveVertex(137, 45);
curveVertex(137, 45);
endShape();

noStroke();
fill(255);
ellipse(100,36,20,25);
//forehead

fill(255);
ellipse(83,55,13,13);
ellipse(117,55,13,13);
fill(0);
ellipse(83,55,8,8);
ellipse(117,55,8,8);
//eyes

fill(255);
beginShape();
curveVertex(86, 73);
curveVertex(86, 73);
curveVertex(80, 78);
curveVertex(78, 85);
curveVertex(85, 90);
curveVertex(100, 108);
curveVertex(100, 108);
endShape();

beginShape();
curveVertex(114, 73);
curveVertex(114, 73);
curveVertex(120, 78);
curveVertex(122, 85);
curveVertex(115, 90);
curveVertex(100, 108);
curveVertex(100, 108);
endShape();

beginShape();
curveVertex(85, 88);
curveVertex(85, 88);
curveVertex(75,91);
curveVertex(73,93);
curveVertex(70,96);
curveVertex(63,110);
curveVertex(63,110);
endShape();

beginShape();
curveVertex(115, 88);
curveVertex(115, 88);
curveVertex(125,91);
curveVertex(127,93);
curveVertex(130,96);
curveVertex(137,110);
curveVertex(137,110);
endShape();

triangle(137,110, 100,110, 115,88)
triangle(63,110, 100,110, 85,88)
//neck

fill(c);
beginShape();
curveVertex(87, 28);
curveVertex(87, 28);
curveVertex(73, 18);
curveVertex(60, 20);
curveVertex(50, 25);
curveVertex(60, 27);
curveVertex(65, 40);
curveVertex(65, 40);
endShape();


beginShape();
curveVertex(113, 28);
curveVertex(113, 28);
curveVertex(127, 18);
curveVertex(140, 20);
curveVertex(150, 25);
curveVertex(140, 27);
curveVertex(135, 40);
curveVertex(135, 40);
endShape();
//ear

beginShape();
curveVertex(70, 52);
curveVertex(70, 52);
curveVertex(58, 55);
curveVertex(55, 75);
curveVertex(55, 75);
endShape();

beginShape();
curveVertex(130, 52);
curveVertex(130, 52);
curveVertex(142, 55);
curveVertex(145, 75);
curveVertex(145, 75);
endShape();

beginShape();
curveVertex(65, 80);
curveVertex(65, 80);
curveVertex(60, 60);
curveVertex(60, 60);
curveVertex(55, 90);
curveVertex(55, 90);
endShape();

beginShape();
curveVertex(135, 80);
curveVertex(135, 80);
curveVertex(140, 60);
curveVertex(140, 60);
curveVertex(145, 90);
curveVertex(145, 90);
endShape();
//hair

fill(178,34,34);
beginShape();
curveVertex(108,80);
curveVertex(108,80);
curveVertex(104,88);
curveVertex(96,88);
curveVertex(92,80);
curveVertex(92,80);
endShape();

fill(255);
ellipse(95,78,15,8);
ellipse(105,78,15,8);
//mouse

fill(0);
ellipse(100,75,12,9);
fill(255);
ellipse(103,74,3,3);
//nose

stroke(0);
noFill();
beginShape();
curveVertex(70,100);
curveVertex(70,100);
curveVertex(55,130);
curveVertex(100,120);
curveVertex(120,130);
curveVertex(80,150);
curveVertex(120,160);
curveVertex(120,160);
endShape();
//neck

fill(255);
noStroke();
ellipse(85,53,2,2);
ellipse(119,53,2,2);
ellipse(82,53,2,2);
ellipse(116,53,2,2);
//eyes light

let c2;
if (BallC == 'A'){
  c2 = color(255,102,255);
}
else if(BallC == 'B'){
  c2 = color(8,46,84);
}
else if(BallC == 'C'){
  c2 = 0;
}

fill(c2);
ellipse(120,151,20,20);

stroke(255);
noFill();
beginShape();
curveVertex(120,141);
curveVertex(120,141);
curveVertex(117,147);
curveVertex(117,155);
curveVertex(120,161);
curveVertex(120,161);
endShape();

beginShape();
curveVertex(116,141);
curveVertex(116,141);
curveVertex(113,147);
curveVertex(113,155);
curveVertex(116,161);
curveVertex(116,161);
endShape();

beginShape();
curveVertex(124,141);
curveVertex(124,141);
curveVertex(121,147);
curveVertex(121,155);
curveVertex(124,161);
curveVertex(124,161);
endShape();

beginShape();
curveVertex(128,141);
curveVertex(128,141);
curveVertex(125,147);
curveVertex(125,155);
curveVertex(128,161);
curveVertex(128,161);
endShape();

stroke(0);
beginShape();
curveVertex(128,157);
curveVertex(128,157);
curveVertex(135,157);
curveVertex(140,160);
curveVertex(140,165);
curveVertex(124,160);
curveVertex(124,160);
endShape();

stroke(0);

noFill();
ellipse(120,151,20,20); //big ball outline

fill(0,230,255);
ellipse(125,160,5,5); //small ball
//end dog
pop();
}

function bone(sx, sy, xPos, yPos){
  push();
  translate(xPos, yPos);
  scale(sx, sy);
fill(255);
ellipse(135,51,12,12);
ellipse(135,59,10,10);

beginShape();
curveVertex(132, 63);
curveVertex(132, 63);
curveVertex(115, 59);
curveVertex(85, 59);
curveVertex(68, 63);
curveVertex(68, 47);
curveVertex(85, 52);
curveVertex(115, 52);
curveVertex(132, 46);
curveVertex(132, 46);
endShape();

ellipse(65,51,12,12);
ellipse(66,59,11,11);

noStroke();
ellipse(70,55,8,13);
pop();
//bone
}

function ball(sx, sy, xPos, yPos){
  push();
  translate(xPos, yPos);
  scale(sx, sy);
stroke(0);
fill(255,225,0);
ellipse(0,15,30,30);
line(0,0,15,15);
line(-15,15,0,30);
pop();
//balls
}
