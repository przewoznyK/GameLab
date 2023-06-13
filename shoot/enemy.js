class Enemy {
    constructor(x, y, width, height, color, hp, direction) {
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        this.width = width;
        this.height = height;
        this.speed = 32;
        this.color = color;
        this.hp = hp;
        this.type = 'enemy';
        this.direction = direction;
        this.canMoveBool = true;
    }
    draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
    }
    move() {
        {
            if (!isSpaceTaken(this.x, this.y, this.direction)) {
                if (this.direction == 'left') {
                    this.lookAtDirection = 'left';
                    this.x -= this.speed;
                }
                if (this.direction == 'right') {
                    this.lookAtDirection = 'right';
                    this.x += this.speed;
                }
            } else if (this.direction == 'left') this.direction = 'right';
            else if (this.direction == 'right') this.direction = 'left';
        }
    }
    destroyEnemy(){
        const indexToRemove = EnemyArray.indexOf(this);
            if (indexToRemove !== -1) {
              EnemyArray.splice(indexToRemove, 1); 
            };
    }
    checkCollsionWithPlayer()
    {
     
        if (player.x + player.width >= this.x && player.x < this.x + this.width && player.y + player.height >= this.y && player.y < this.y + this.height) {
            if(!player.untouchableBool)
            {
                player.takenDamage(3000);
            }
        }
    }
    timeoutUpdate()
    {
        this.move();
       bulletEnemyArray.push(new EnemyBullet(this.x, this.y, this.lookAtDirection, 'green'));
    }
    update() {
        switch (this.hp)
        {
            case 0:
                this.destroyEnemy();
            break;
            case 1:
                this.color = 'rgb(250,128,114)';
            break;
            case 2:
                this.color = 'rgb(205,92,92)';
            break;
        }
        this.draw();     
        this.checkCollsionWithPlayer()
    }


}

class EnemyY extends Enemy {
    move() {
        {
            if (!isSpaceTaken(this.x, this.y, this.direction)) {
                if (this.direction == 'up') {
                    this.lookAtDirection = 'up';
                    this.y -= this.speed;
                }
                if (this.direction == 'down') {
                    this.lookAtDirection = 'down';
                    this.y += this.speed;
                }
            } else if (this.direction == 'down') this.direction = 'up';
            else if (this.direction == 'up') this.direction = 'down';
        }
    }
}

class EnemyFollowPlayer extends Enemy {
    move() {
        {
            if (!isSpaceTaken(this.x, this.y, this.direction)) {
                if (this.direction == 'left') {
                    this.lookAtDirection = 'left';
                    this.x -= this.speed;
                }
                if (this.direction == 'right') {
                    this.lookAtDirection = 'right';
                    this.x += this.speed;
                }
                if (this.direction == 'up') {
                    this.lookAtDirection = 'up';
                    this.y -= this.speed;
                }
                if (this.direction == 'down') {
                    this.lookAtDirection = 'down';
                    this.y += this.speed;
                }
            } else if (this.direction == 'left') this.direction = 'right';
            else if (this.direction == 'right') this.direction = 'left';
            else if (this.direction == 'down') this.direction = 'up';
            else if (this.direction == 'up') this.direction = 'down';

        }
        this.followPlayer();
    }
    followPlayer() {
        if (player.x < this.x) {
            this.direction = 'left';

        } else if (player.x > this.x) {
            this.direction = 'right';
        } else if (player.y > this.y){
            this.direction = 'down';
        } else if (player.y < this.y){
            this.direction = 'up';
        }
        else this.direction = 'none';
    }
}