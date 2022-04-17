canvas = document.getElementById("c") 
ctx = canvas.getContext("2d")


ch = 90
cw = 100
cx = 10
cy = 10


backgroundimg = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	background_imgtag = new Image()
    background_imgtag.onload = uploadBackground
    background_imgtag.src = backgroundimg
    

   car_imgtag = new Image()
   car_imgtag.onload = uploadgreencar
   car_imgtag.src = greencar_image
   
}

function uploadBackground() {
	ctx.drawImage(background_imgtag , 0 , 0 , canvas.width , canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(car_imgtag , cx , cy , cw , ch)	
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
	if(cy > 0){
		cy = cy - 10
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(cy < 500){
        cy = cy + 10
        uploadBackground();
        uploadgreencar();
    }
}

function left(){
	if(cx > 0){
        cx = cx - 10
        uploadBackground();
        uploadgreencar();
    }	
}

function right(){
	if(cx < 700){
        cx = cx + 10
        uploadBackground();
     uploadgreencar();
    }
}
