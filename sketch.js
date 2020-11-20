var capture;
var buttonTirarFoto;
var buttonSalvarFoto;
var fotoTirada;
var modo = 0;
var confirmarTakeSnap = false;


function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
 capture.position(windowWidth,windowHeight);
 //captur
  //capture.hide();
 buttonTirarFoto = createButton("take image");
  buttonTirarFoto.position(width/2, height - 60); 
  buttonTirarFoto.mousePressed(takeSnap);
  
  
 }
 
 function draw() {
   background('black')  
   //*camera.y=mouseY
   console.log(capture.y)
   if(modo == 0){ 
     image(capture,width-850,height-600);   
   }else if(modo == 1){
     background(255);
     image(fotoTirada, 0, 0, width, height);
     saveCanvas("camera", "png");
     background(255);
     modo = 0;
   }
 }
 
 function takeSnap(){
  image(capture, 20, 0);
  fotoTirada = capture.get();
  image(fotoTirada, 20, 0);
  
  capture = createCapture(VIDEO);
  capture.hide();
  
  confirmarTakeSnap = true;
  if(confirmarTakeSnap){
    modo = 1;
 }
 
 function saveSnap(){
   
   }
 }
  
      
