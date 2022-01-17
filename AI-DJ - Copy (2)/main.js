song = ""
leftwristX = ""
leftwristY = ""
rightwristX = ""
rightwristY = ""

function preload() {
    song = loadSound("rip.mp3")
    song2= loadSound("rrrrrrr.mp3")

}

function setup() {

    canvas = createCanvas(600, 600)
    video = createCapture(VIDEO)
    video.hide()
    canvas.position(650, 250)

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 598, 598)


}

function play() {

    song.play()
    song.setVolume(1)
    song.rate(1)
}

function modelloaded() {
    console.log("model is loaded")
}

function gotPoses(results) {

    if (results.length > 0) {

        leftwristX = results[0].pose.leftWrist.x
        leftwristY = results[0].pose.leftWrist.y
        rightwristX = results[0].pose.rightWrist.x
        rightwristY = results[0].pose.rightWrist.y
        console.log(results)
    }
}

function stop1(){
    song.stop()
}