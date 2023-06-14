class Enemy {
    eyePositionX = 0;
    eyePositionY = 0;
    lookAtDirection = 'left';
    collisionResult = 'none';
    constructor(x, y, width, height, speed, color, hp, direction) {
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = color;
        this.hp = hp;
        this.type = 'enemy';
        this.direction = direction;
        this.canMoveBool = true;
    }
    // Eye position
    lookAt(direction) {
        switch (direction) {
            case 'left':
                this.eyePositionX = this.x + 0;
                this.eyePositionY = this.y + 5;
                break;
            case 'right':
                this.eyePositionX = this.x + 11;
                this.eyePositionY = this.y + 5;
                break;
            case 'right':
                this.eyePositionX = this.x + 10;
                this.eyePositionY = this.y + 5;
                break;
            case 'up':
                this.eyePositionX = this.x + 6;
                this.eyePositionY = this.y + 1;
                break;
            case 'down':
                this.eyePositionX = this.x + 6;
                this.eyePositionY = this.y + 10;
                break;
            default:
                this.eyePositionX = this.x;
                this.eyePositionY = this.y;
        }
    }
    draw() {
        // Enemy square
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
        // Enemy border
        c.lineWidth = 2;
        c.rect(this.x, this.y, this.width, this.height);
        c.stroke();
        // Enemy Eye
        c.beginPath();
        c.fillStyle = 'black';
        c.fillRect(this.eyePositionX, this.eyePositionY, this.width / 2, this.height / 4);
        c.fill;
    }
    move() {
        throw new Error('Metoda move() musi zostać zaimplementowana przez klasę podrzędną.');
    }
    destroyEnemy() {
        const indexToRemove = EnemyArray.indexOf(this);
        if (indexToRemove !== -1) {
            EnemyArray.splice(indexToRemove, 1);
        };
    }
    checkCollsionWithPlayer() {

        if (player.x + player.width >= this.x && player.x < this.x + this.width && player.y + player.height >= this.y && player.y < this.y + this.height) {
            if (!player.untouchableBool) {
                player.takenDamage(3000);
            }
        }
    }
    timeoutUpdate() {
        this.move();
        bulletEnemyArray.push(new EnemyBullet(this.x, this.y, this.lookAtDirection, this.color));
    }
    update() {
        switch (this.hp) {
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
        this.lookAt(this.lookAtDirection);
        this.checkCollsionWithPlayer()
        this.draw();

    }
}

class EnemyX extends Enemy {
    move() {
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

class EnemyY extends Enemy {
    move() {
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

class EnemyFollowingPlayer extends Enemy {
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
        } else if (player.y > this.y) {
            this.direction = 'down';
        } else if (player.y < this.y) {
            this.direction = 'up';
        }
        else this.direction = 'none';
    }
}

class EnemyNotMoving extends Enemy {
    move() {

    }
}