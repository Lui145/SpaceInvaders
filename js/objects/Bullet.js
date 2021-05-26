class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;

        this.visible = true;

        this.width = bullet.width;
        this.height = bullet.height;

        this.img = loadImage("assets/sprites/Bullet.png");

        this.speed = 10;
    }

    draw(){
        if(this.visible) image(this.img, this.x, this.y, this.width ,this.height);
        this.move();
        this.collision();
    }

    collision(){
        for(let i = 0; i < enemys.length; i++){
            for(let j = 0; j < enemys[i].length; j++){
                if(enemys[i][j].x < this.x + this.width && enemys[i][j].x + enemys[i][j].width > this.x
                    && enemys[i][j].y < this.y + this.height && enemys[i][j].y + enemys[i][j].height > this.y &&
                    this.visible && enemys[i][j].visible){
                        this.visible = false;
                        enemys[i][j].visible = false;
                        puntos++;
                    }
            }
        }
    }

    move(){
        this.y-=this.speed;
    }
}
