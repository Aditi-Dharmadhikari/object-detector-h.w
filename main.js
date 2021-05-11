
status = "";
array = [];

img1 = "";
img2 = "";
img3 = "";
img4 = "";
img5 = "";
img6 = "";

function preload(){
    img1 = loadImage("Boque.jpeg");

}


function setup(){
    canvas = createCanvas(380 , 350);
    canvas.center();
    
    object = ml5.objectDetector("cocossd" , model_load);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"

}

function model_load(){
    console.log("COCOSSD LOADED");
    status = true;
    
}

function gotCocossd(error, results){

    if(error){
        console.log(error);

    }

    else{
    console.log(results);
    array = results;
    }
}

function draw(){

if(status != " "){
    for(i = 0; i < array.length ; i++){

       r = random(255);
        g = random(255);
        b = random(255);

        object.detect(video , gotCocossd);

        document.getElementById("status").innerHTML = "Status: Object Detect";
        document.getElementById("objects_detected").innerHTML = "Number of objects detected : " + array.length;
     fill(r,g,b);
     percent = floor(array[i].confidence * 100);
     text(array[i].label + percent + " % " , array[i].x +12, array[i].y +12);
     noFill();          
     stroke(r,g,b);
     rect(array[i].x , array[i].y , array[i].height, array[i].width);
     

    }
}
}