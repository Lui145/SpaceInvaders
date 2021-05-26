let player;
var enemys = [];
var bullets = [];
var puntos = 0;
var vidas = 3;
let cantEnemigosX = 9;
let cantEnemigosY = 5;
let espEntreEnemigosX = 40;
let espEntreEnemigosY = 30;

let font;
function preload() {
  font = loadFont('./assets/fonts/Gameplay.ttf');
}

function setup() {
	player = new Player(PlayerFactory.coords(
			board.width/2 - playerShip.width/2,
			board.height - 4*playerShip.height
		),
			PlayerFactory.controllSettings(37,39,32)
		);
	crearEnemigos(board.width/2 - cantEnemigosX/1.7 *(espEntreEnemigosX + enemy.width),6*enemy.height,cantEnemigosX,cantEnemigosY);

	createCanvas(board.width, board.height);
}

function draw() {
	background(0);
	player.draw();
	pintarEnemigos();
	pintarBalas();
	win();
	points();
	gameOver();
}

function win(){
	if(cantEnemigosX * cantEnemigosY == puntos){
		textSize(50);
		fill(0,100,150);
		text("Has ganado!!!", board.width/2 - 150, board.height/2-100);
		textSize(34);
		text("Presione enter para jugar de  nuevo", board.width/2 - 270, board.height/2);
		frameRate(0);
	}
}

function reset(){
	puntos = 0;
	enemys = [];
	crearEnemigos(board.width/2 - cantEnemigosX/1.7 *(espEntreEnemigosX + enemy.width),6*enemy.height,cantEnemigosX,cantEnemigosY);
}

function gameOver(){
	if(vidas == 0){
		textFont(font);
		textSize(50);
		fill(0,100,150);
		text("Has Perdido!!!", board.width/2 - 150, board.height/2-100);
		textSize(34);
		text("Presione enter para jugar de  nuevo", board.width/2 - 270, board.height/2);
		frameRate(0);
	}
}

function points(){
	textSize(40);
	textFont(font);
	fill(255,255,255  );
	text(`Vidas: ${vidas}   Puntos: ${puntos * 100}`, width/3, 50);
}

function crearEnemigos(x, y, cantX, cantY){
	enemys = new Array(cantY);

	let posX = x;
	let posY = y;

	for(let i = 0; i < cantY; i++){

		enemys[i] = new Array(cantX);

		for(let j = 0; j < cantX; j++){
			enemys[i][j] = new Enemy(posX += enemy.width + espEntreEnemigosX, posY);
		}

		posY += enemy.height + espEntreEnemigosY;
		posX = x;

	}
}

function pintarBalas(){
	for(let i = 0; i < bullets.length; i++){
		if(bullets[i].y<0) bullets.splice(i,1);
	}

	bullets.forEach((bullet) => {
		bullet.draw();
		if(bullet.y<0) bullet.delet;
	});
}

function pintarEnemigos(){
	for(let i = 0; i < enemys.length; i++){
		for(let j = 0; j < enemys[i].length; j++){
			enemys[i][j].draw();
		}
	}

	if(bajarNivel){
		for(let i = 0; i < enemys.length; i++){
			for(let j = 0; j < enemys[i].length; j++){
				enemys[i][j].bajarNivel();
			}
		}
		bajarNivel = false;
	}
}

function keyPressed(){
	if(keyCode == 13){
		location.reload();
	}
}