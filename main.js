function setup() {
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(canvas.x, canvas.y);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}
function modelLoaded() {
    console.log('PoseNet is initialised');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}