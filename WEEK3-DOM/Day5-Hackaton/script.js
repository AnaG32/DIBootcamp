var vv= document.getElementById("villaVie");
var paper = vv.getContext("2d");

var xSheep = 130;
var ySheep = 30;
var xWolf = 500;
var yWolf = 300;

document.addEventListener("keydown", moveSheep);
var keys = { UP:38, DOWN:40, LEFT:37, RIGHT:39 };

var background = {
	url:"tile.png", loadOk:false
}
var sheep = {
	url:"sheep.png", loadOk:false
}
var wolf = {
    url:"wolf.png", cargaOk: false
}

background.object = new Image();
background.object.src = background.url;
background.object.addEventListener("load", loadBackground);

sheep.object = new Image();
sheep.object.src = sheep.url;
sheep.object.addEventListener("load", loadSheeps);

wolf.object = new Image();
wolf.object.src = wolf.url;
wolf.object.addEventListener("load", loadWolf);

function loadBackground()
{
	background.loadOk = true;
	draw();
}

function loadSheeps()
{
	sheep.loadOk = true;
	draw();
}

function loadWolf()
{
	wolf.loadOk = true;
	draw();
}


function draw()
{
	if(background.loadOk == true)
	{
		paper.drawImage(background.object, 0, 20);
	}

	if(sheep.loadOk == true)
	{
		paper.drawImage(sheep.object, xSheep, ySheep);
	}

	if(wolf.loadOk == true)
	{
		paper.drawImage(wolf.object, xWolf, yWolf);
	}
}


function moveSheep (event)
{
	var movement = 4;
	var movementWolf = 3.5;
	switch (event.keyCode)
  {
    case keys.UP:
			if (ySheep >= 25) {
				ySheep = ySheep - movement;
			}
			else{
				ySheep = ySheep;
			}
	  draw();
    break;
    case keys.DOWN:
			if (ySheep <= 760) {
				ySheep = ySheep + movement;
			}
			else{
				ySheep = ySheep;
			}
			if (ySheep <= yWolf) {
				yWolf = yWolf - movementWolf;
			}
			if (ySheep >= yWolf) {
				yWolf = yWolf + movementWolf;
			}
		draw();
    break;
    case keys.LEFT:
      if (xSheep >= 10) {
				xSheep = xSheep - movement;
			}
			else{
				xSheep = xSheep;
			}
			if (xSheep <= xWolf) {
				xWolf = xWolf - movementWolf;
			}
			if (xSheep >= xWolf) {
				xWolf = xWolf + movementWolf;
			}
		draw();
    break;
    case keys.RIGHT:
			if (xSheep <= 760) {
				xSheep = xSheep + movement;
			}
			else{
				xSheep = xSheep;
			}
			if (xSheep <= xWolf) {
				xWolf = xWolf - movementWolf;
			}
			if (xSheep >= xWolf) {
				xWolf = xWolf + movementWolf;
			}
		draw();
    break;

    default:
      console.log("You pressed another key, uses the arrows");
    break;
  }


   if (xSheep == xWolf && ySheep == yWolf) {
	
	if (ySheep >= 400 && xSheep >= 400) {
		xSheep = 30;
		ySheep = 30;
		xWolf = 500;
		yWolf = 500;
		alert("The wolf devoured you");
	} 
  	} else if (ySheep >= 600 && xSheep >= 600) {
		xSheep = 30;
		ySheep = 30;
		xWolf = 500;
		yWolf = 500;
		draw();
		alert("You win");
 	} else if (xWolf >= 600 && yWolf >= 600) {
		xSheep = 30;
		ySheep = 30;
		xWolf = 500;
		yWolf = 500;
		draw();
		alert("The wolf devoured you");
  }

}

function aleatorio(min,max)
{
	var result;
	result = Math.floor(Math.random() * (max-min+1))+min;
	return result;
}