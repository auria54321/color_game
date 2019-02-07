var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorPicked = document.getElementById("colorPicked");
var theColor = pickColor();
var answer = document.getElementById("answer");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newGame");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var level = true;
easy.classList.remove("selected");
hard.classList.remove("selected");
colorPicked.textContent = theColor;

for(var i = 0;i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === theColor) {
			answer.textContent = "Correct";
			changeColor(theColor);
			h1.style.backgroundColor = theColor;
			newGame.textContent = "Play Again?"
		}
		else {
			this.style.backgroundColor = "#232323";
			answer.textContent = "Try Again";
		}
	})
}

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	colors = generateRandomColors(3);
	for(var i = 0; i<squares.length; i++) {
		if (i < 3) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	level = false;
	theColor = pickColor();
	colorPicked.textContent = theColor;
	answer.textContent = "";
	h1.style.backgroundColor = "steelblue";
	newGame.textContent = "New Colors";
	hard.classList.remove("selected");

})

hard.addEventListener("click", function(){
	level = true;
	createGame(1);
	
});
newGame.addEventListener("click", createGame);

function changeColor(color) {
	for(i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var place = Math.floor(Math.random() * colors.length);	
	return colors[place];
}

function generateRandomColors(num) {
	var colors = [];
	for(var i = 0; i<num; i++) {
		colors.push(randomColor());
	}
	return colors;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function createGame(num) {
	easy.classList.remove("selected");
	level == true ? colors = generateRandomColors(6): colors = generateRandomColors(3); 

	for(var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	if(num==1) {
		hard.classList.add("selected");
		for (var i = 3; i < 6; i++) {
			squares[i].style.display = "";
		}
	}
	else {
		hard.classList.remove("selected");
	}
	theColor = pickColor();
	colorPicked.textContent = theColor;
	answer.textContent = "";
	h1.style.backgroundColor = "steelblue";
	newGame.textContent = "New Colors"

}


