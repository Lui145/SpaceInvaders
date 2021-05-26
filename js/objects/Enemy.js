class Enemy{
    constructor(x,y){
        this.x = x;
        this.y = y;

        this.visible = true;

        this.width = enemy.width;
        this.height = enemy.height;

        this.img = loadImage("/assets/sprites/Invader.png");
    }

    draw(){
        if(this.visible) image(this.img, this.x, this.y, this.width ,this.height);
        this.move();
    }

    move(){
        if(this.x >= board.width - 2*enemy.width && this.visible){
            directionEnemy = -1;
            bajarNivel = true;
        } else if(this.x <= 0 + 2*enemy.width && this.visible){
            directionEnemy = 1;
            bajarNivel = true;
        };

        (directionEnemy == 1)? this.x += speedEnemy : this.x -= speedEnemy;
    }

    bajarNivel(){
        this.y += 2*enemy.height
    }

}
