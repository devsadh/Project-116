/*var nosex = 0
var nosey = 0


function preload() {
    clownnose = loadImage("https://i.postimg.cc/KYCRMZkT/Clown-Nose-PNG-High-Quality-Image-1.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(clownnose, nosex - 15, nosey - 20, 30, 30)
}

function take_snapshot() {
    save('Image.png')
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}
*/
nosex = 0 
nosey = 0

function preload(){
lipstick = loadImage("https://i.postimg.cc/gc3fXRgD/l1.png")
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw(){
    image(video,0,0,300,300)
    image(lipstick,nosex-10,nosey+15,25,20)
}

function take_snapshot(){
    save('myImage.png')
}

function modelLoaded(){
    console.log("PoseNet is intialized");
}

function gotPoses(results){
    if(results.length > 0){
   console.log(results);
   nosex = results[0].pose.nose.x
   nosey = results[0].pose.nose.y
   console.log("nose x = "+ results[0].pose.nose.x);
   console.log("nose y = "+ results[0].pose.nose.y)
    }
}