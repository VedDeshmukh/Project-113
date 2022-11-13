function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(400, 400);
    webcam.hide();
}

function draw(){
    image(webcam, 50, 100, 50, 100);
    circle(150, 150, 50);
}

function takeSnapshot(){
    save("p5_snapshot.png");
}