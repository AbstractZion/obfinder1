status1=" "
statfound=" "

function setup(){
    canvas=createCanvas(550,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,500);
    video.hide()
}