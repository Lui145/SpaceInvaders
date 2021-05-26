class Player{
    constructor(coords, controllSettings){
        this.x = coords.x;
        this.y = coords.y;

        this.width = playerShip.width;
        this.height = playerShip.height;

        this.img = loadImage("./assets/sprites/Ship.png");

        this.speed = 18;

        this.controllSettings = controllSettings;
    }

    draw(){
        image(this.img, this.x, this.y, this.width ,this.height);
        this.move();
        this.collition();
    }

    move() {
        this.controllSettings.forEach((controll) => {
            if(!keyIsPressed) keyShotDown = false;
            if (keyIsDown(controll.key)){
                this[controll.name]();
            }
        });
    }

    moveLeft(){
        if (this.x >= 0 + playerShip.width){
            this.x -= this.speed;
        }
    }

    moveRight(){
        if (this.x <= board.width - playerShip.width){
            this.x += this.speed;
        }
    }

    collition(){
        for(let i = 0; i < enemys.length; i++){
            for(let j = 0; j < enemys[i].length; j++){
                if(enemys[i][j].x < this.x + this.width && enemys[i][j].x + enemys[i][j].width > this.x
                    && enemys[i][j].y < this.y + this.height && enemys[i][j].y + enemys[i][j].height > this.y &&
                    enemys[i][j].visible){
                        vidas--;
                        reset();
                    }
            }
        }
    }

    shot(){
        if(!keyShotDown){
            bullets.push(new Bullet(this.x+this.width/2-bullet.width/2,this.y-bullet.height))
            keyShotDown = true;
        }
    }

}

const PlayerFactory = {
    coords:(x, y) => {
        return  {
            x: x,
            y: y,
        };
    },
    controllSettings: (moveLeftKey, moveRightKey, space) => {
        return [
            {
                name: "moveLeft",
                key: moveLeftKey,
            },
            {
                name: "moveRight",
                key: moveRightKey,
            },
            {
                name: "shot",
                key: space,
            },
        ];
    }
};