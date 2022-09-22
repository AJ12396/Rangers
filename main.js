canvas = new fabric.Canvas("meuCanvas")
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		blockImageObject= Img;

		blockImageObject.scaleToWidth(blockImageWidth)
		blockImageObject.scaleToHeight(blockImageHeight)
		blockImageObject.set({

			top:blockY,
			left:blockX
		})
		canvas.add(blockImageObject)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		newImage("rr1.png")
		console.log("E")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage("gr.png")
		console.log("V")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage("yr.png")
		console.log("A")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage("pr.png")
		console.log("R")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		newImage("br.png")
		console.log("I")
	}
	
}

