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
    timeoutUpdate()
    {
        this.move();
    }
    update() {
        this.draw();
    }

    destroyEnemy(){
        const indexToRemove = EnemyArray.indexOf(this); // Znajdź indeks obiektu w tablicy
            if (indexToRemove !== -1) {
              EnemyArray.splice(indexToRemove, 1); // Usuń obiekt z tablicy
            };
            console.log('jeblo');
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