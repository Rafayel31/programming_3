  var n= Math.round(Math.random()*30);
  var m= Math.round(Math.random()*30);
var matrix=[];
 for (var i = 0; i < n; i++) {
    matrix[i] = [];
  for (var o = 0; o < n; o++) {
       matrix[i][o] = Math.round(Math.random()*5);
 }
}

function setup() {
  for (var i = 0; i < n; i++) {
    matrix[i] = [];
  for (var o = 0; o < n; o++) {
       matrix[i][o] = Math.round(random(0,5));
 }
}var side=1;
    createCanvas(side*matrix[0].length,matrix.length*side);
    background("grey");

}
function draw() {

for(var y = 0; y < matrix.length; y++){
   for(var x = 0; x < matrix[y].length; x++){
       if(matrix[y][x] == 1){
fill(255,0,0);
rect(y*side, x*side, side, side);

       }
           if(matrix[y][x] == 2){
fill("blue");
rect(y*side, x*side, side, side);

       }
           if(matrix[y][x] == 3){
fill("green");
rect(y*side, x*side, side, side);

       }
           if(matrix[y][x] == 4){
fill("yellow");
rect(y*side, x*side, side, side);

       }
           if(matrix[y][x] == 5){
fill(255,0,0);
rect(y*side, x*side, side, side);

       }
   }
}

}
var grassArr=[];
var eaterArr=[];
var PredatorArr=[];
var HunterArr=[];
var TerminatorArr=[];
var side = 60;


function setup() {
   frameRate(1);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');  
    for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
           var gr = new Grass(x,y,1); 
           grassArr.push(gr);
      }
     if (matrix[y][x] == 2) {
           var gr = new GrassEater(x,y,2);  
           eaterArr.push(gr);
      }
         if (matrix[y][x] == 3) {
           var gr = new Predator(x,y,3);
           PredatorArr.push(gr);
      }
       if (matrix[y][x] == 4) {
           var gr = new Hunter(x,y,4);
           HunterArr.push(gr);
      }
       if (matrix[y][x] == 5) {
           var gr = new Terminator(x,y,5);
           TerminatorArr.push(gr);
      }
}}
}
function draw() {

   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {

           if (matrix[y][x] == 1) {
               fill("green");
           }
           else if (matrix[y][x] == 0) {
               fill("#acacac");
           }
        else if (matrix[y][x] ==2) {
               fill("yellow");
           }
              else if (matrix[y][x] ==3) {
               fill("red");
           }
                 else if (matrix[y][x] ==4) {
               fill("blue");
           }
                 else if (matrix[y][x] ==5) {
               fill("orange");
           }
           rect(x * side, y * side, side, side);
    
    /*
    fill("blue")
    text(x+" "+y, x*side+side/2,y*side+side/2)
    */  
       }

 
 
   }
       for(var o in TerminatorArr){
       TerminatorArr[o].eat();
      TerminatorArr[o].eat();
      TerminatorArr[o].mul();
      TerminatorArr[o].die();

   }
    for(var o in HunterArr){
       HunterArr[o].eat();
      HunterArr[o].eat();
      HunterArr[o].mul();
      HunterArr[o].die();

   }
      for(var o in PredatorArr){
      PredatorArr[o].eat();
      PredatorArr[o].mul();
      PredatorArr[o].die();

   }
  for(var o in eaterArr){
      eaterArr[o].eat();
      eaterArr[o].mul();
      eaterArr[o].die();

   }  for(var i in grassArr){
       grassArr[i].mul();
   }}