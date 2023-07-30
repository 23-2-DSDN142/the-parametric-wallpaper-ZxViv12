//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
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


var x = 0;
var y = 0;
var c = 0; //c<10

fill(189,252,210);
triangle(0,0, x+30,0, 0,y+30);
fill(135,206,235);
triangle(0,0, x+20,0, 0,y+20);
fill(255,192,203);
triangle(0,0, x+10,0, 0,y+10);

//backgrounds 

fill(255);
noStroke();
rect(x+70,40,60,70);

fill(0);
stroke(0);
beginShape();
curveVertex(x+90, 40);
curveVertex(x+90, 40);
curveVertex(x+95, 50);
curveVertex(x+95, 60);
curveVertex(x+90, 70);
curveVertex(x+80, 78);
curveVertex(x+80, 78);
endShape();

beginShape();
curveVertex(x+110, 40);
curveVertex(x+110, 40);
curveVertex(x+105, 50);
curveVertex(x+105, 60);
curveVertex(x+110, 70);
curveVertex(x+120, 78);
curveVertex(x+120, 78);
endShape();
//alae of the nose

beginShape();
curveVertex(x+90, 40);
curveVertex(x+90, 40);
curveVertex(x+70, 45);
curveVertex(x+70, 65);
curveVertex(x+90, 70);
curveVertex(x+90, 70);
endShape();

beginShape();
curveVertex(x+110, 40);
curveVertex(x+110, 40);
curveVertex(x+130, 45);
curveVertex(x+130, 65);
curveVertex(x+110, 70);
curveVertex(x+110, 70);
endShape();
//eye socket

beginShape();
curveVertex(x+85, 40);
curveVertex(x+85, 40);
curveVertex(x+64, 48);
curveVertex(x+62, 60);
curveVertex(x+62, 70);
curveVertex(x+64, 80);
curveVertex(x+66, 90);
curveVertex(x+64, 100);
curveVertex(x+63,110);
curveVertex(x+63,110);
endShape();

beginShape();
curveVertex(x+115, 40);
curveVertex(x+115, 40);
curveVertex(x+136, 48);
curveVertex(x+138, 60);
curveVertex(x+138, 70);
curveVertex(x+136, 80);
curveVertex(x+134, 90);
curveVertex(x+136, 100);
curveVertex(x+137,110);
curveVertex(x+137,110);
endShape();

noStroke();
triangle(x+80,55, x+63,110, x+85,88);
triangle(x+120,55, x+137,110, x+115,88);
//face

stroke(0);
beginShape();
curveVertex(x+63, 45);
curveVertex(x+63, 45);
curveVertex(x+75, 32);
curveVertex(x+100, 27);
curveVertex(x+125, 32);
curveVertex(x+137, 45);
curveVertex(x+137, 45);
endShape();

noStroke();
fill(255);
ellipse(x+100,36,20,25);
//forehead

fill(255);
ellipse(x+83,55,13,13);
ellipse(x+117,55,13,13);
fill(0);
ellipse(x+83,55,8,8);
ellipse(x+117,55,8,8);
//eyes

fill(255);
beginShape();
curveVertex(x+86, 73);
curveVertex(x+86, 73);
curveVertex(x+80, 78);
curveVertex(x+78, 85);
curveVertex(x+85, 90);
curveVertex(x+100, 108);
curveVertex(x+100, 108);
endShape();

beginShape();
curveVertex(x+114, 73);
curveVertex(x+114, 73);
curveVertex(x+120, 78);
curveVertex(x+122, 85);
curveVertex(x+115, 90);
curveVertex(x+100, 108);
curveVertex(x+100, 108);
endShape();

beginShape();
curveVertex(x+85, 88);
curveVertex(x+85, 88);
curveVertex(x+75,91);
curveVertex(x+73,93);
curveVertex(x+70,96);
curveVertex(x+63,110);
curveVertex(x+63,110);
endShape();

beginShape();
curveVertex(x+115, 88);
curveVertex(x+115, 88);
curveVertex(x+125,91);
curveVertex(x+127,93);
curveVertex(x+130,96);
curveVertex(x+137,110);
curveVertex(x+137,110);
endShape();

triangle(x+137,110, x+100,110, x+115,88)
triangle(x+63,110, x+100,110, x+85,88)
//neck

fill(0);
beginShape();
curveVertex(x+87, 28);
curveVertex(x+87, 28);
curveVertex(x+73, 18);
curveVertex(x+60, 20);
curveVertex(x+50, 25);
curveVertex(x+60, 27);
curveVertex(x+65, 40);
curveVertex(x+65, 40);
endShape();

fill(0);
beginShape();
curveVertex(x+113, 28);
curveVertex(x+113, 28);
curveVertex(x+127, 18);
curveVertex(x+140, 20);
curveVertex(x+150, 25);
curveVertex(x+140, 27);
curveVertex(x+135, 40);
curveVertex(x+135, 40);
endShape();
//ear

beginShape();
curveVertex(x+70, 52);
curveVertex(x+70, 52);
curveVertex(x+58, 55);
curveVertex(x+55, 75);
curveVertex(x+55, 75);
endShape();

beginShape();
curveVertex(x+130, 52);
curveVertex(x+130, 52);
curveVertex(x+142, 55);
curveVertex(x+145, 75);
curveVertex(x+145, 75);
endShape();

beginShape();
curveVertex(x+65, 80);
curveVertex(x+65, 80);
curveVertex(x+60, 60);
curveVertex(x+60, 60);
curveVertex(x+55, 90);
curveVertex(x+55, 90);
endShape();

beginShape();
curveVertex(x+135, 80);
curveVertex(x+135, 80);
curveVertex(x+140, 60);
curveVertex(x+140, 60);
curveVertex(x+145, 90);
curveVertex(x+145, 90);
endShape();
//hair

fill(178,34,34);
beginShape();
curveVertex(x+108,80);
curveVertex(x+108,80);
curveVertex(x+104,88);
curveVertex(x+96,88);
curveVertex(x+92,80);
curveVertex(x+92,80);
endShape();

fill(255);
ellipse(x+95,78,15,8);
ellipse(x+105,78,15,8);
//mouse

fill(0);
ellipse(x+100,75,12,9);
fill(255);
ellipse(x+103,74,3,3);
//nose

stroke(0);
noFill();
beginShape();
curveVertex(x+70,100);
curveVertex(x+70,100);
curveVertex(x+55,130);
curveVertex(x+100,120);
curveVertex(x+120,130);
curveVertex(x+80,150);
curveVertex(x+120,160);
curveVertex(x+120,160);
endShape();
//neck

fill(0);
ellipse(x+83,55,c,c);
ellipse(x+117,55,c,c);
//eyes2

fill(255);
noStroke();
ellipse(x+85,53,2,2);
ellipse(x+119,53,2,2);
ellipse(x+82,53,2,2);
ellipse(x+116,53,2,2);
//eyes light

fill(0);
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
fill(0,random(255,222),255);
ellipse(125,160,5,5);
//end

stroke(0);
fill(255,random(255,222),0);
ellipse(x,15,30,30);
line(x,0,x+15,15);
line(x-15,15,x,30);
ellipse(180,x+20,5,5);
ellipse(20,x+20,5,5);

fill(0,random(255,222),255);
ellipse(80,x*5,5,5);
ellipse(30,y+35,5,5);

fill(0,random(255,222),0);
ellipse(160,c*8,c+6,c+6);
ellipse(70,c*20,10,10);
//balls


}

