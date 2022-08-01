
//alert("This Project is not yet fully optimised, some features may won't work, If you get any query kindly email to chopcodes@gmail.com")
music_hatchback_coachsie = '';
vmusic_deathbed_powfu = '';
function preload(){
    music_deathbed_powfu = loadSound('music/deathbed.mp3');
    music_hatchback_coachsie = loadSound('music/hatchback.mp3');
}
function setup(){
canvas = createCanvas(500,400);
webcam = createCapture(VIDEO);
webcam.hide();
//canvas.center();
//webcam = createCapture(VIDEO);
}
function draw(){
    image(webcam,0,0,500,400)
}
