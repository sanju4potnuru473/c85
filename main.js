//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 200;
background_image = "parkingLot.jpg";
car_image = "car2.png";
car_x = 10;
car_y = 10

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    //rover
    car_imgTag = new Image();
    car_imgTag.onload = uploadgreencar;
    car_imgTag.src = car_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(car_y -= 10)
    {
        car_y -= 10;
        console.log("when up arrow is pressed =" + car_x + "-"+car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	//Define function to move the car downward
	if(car_y <= 500)
    {
        car_y +=10;
        console.log("when down arrow is pressed, x =" + car_x +"| y =" + car_y);
        uploadBackground();
        uploadgreencar();

    }
}

function left()
{
	//Define function to move the car left side
	if(car_x >= 0)
    {
        car_x -= 10;
        console.log("when left arrow is pressed x=" + car_x +"| y= "+ car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	//Define function to move the car right side
	if(car_x <=700)
    {
        car_x += 10;
        console.log("when right arrow is pressed x=" + car_x+"| y =" +car_y);
        uploadBackground();
        uploadgreencar();
    }

}
