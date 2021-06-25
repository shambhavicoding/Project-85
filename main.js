canvas=document.getElementById("myCanvas");
ctx=canvas.getElementById("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.jpg";
car2_x=10;
car2_y=100;

background_image="background car image.jpg";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.Keycode;
console.log(keyPressed);
if(keyPressed=='38')
{
    car_1up();
    console.log("up arrow key");
}
if(keyPressed=='40')
{
    car_1down();
    console.log("down arrow key");
}
if(keyPressed=='37')
{
    car_1left();
    console.log("left arrow key");
}
if(keyPressed=='39')
{
    car_1right();
    console.log("right arrow key");
}
if (keyPressed=='87')
{
    car2_up();
    console.log("key w");
}
if(keyPressed=='83')
{
    car2_down();
    console.log("key s");
}
if(keyPressed=='65'){
    car2_left();
    console.log("key a");
}
if(keyPressed=='68'){
    car2_right();
    console.log("key d");
}
}
function car_1up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car_1down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("When down arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car_1left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("When left arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car_1right(){
    if(car1_x<=500){
        car1_x=car1_x+10;
        console.log("When right arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car_2up(){
    if(car1_y>=0){
        car2_y=car2_y-10;
        console.log("When w key is pressed, x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("When s arrow is pressed, x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("When a key is pressed, x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right(){
    if(car2_x<=500){
        car2_x=car2_x+10;
        console.log("When d key is pressed, x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
