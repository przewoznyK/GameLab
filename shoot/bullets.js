class Bullet {
    directionX = 1;
    directionY = 1;
    constructor(x, y, lookAtDirection, color, speed = 5, timeToDelete = 2000) {
        this.x = x+10;
        this.y = y+10;
        this.width = 10;
        this.height = 10;
        this.lookAtDirection = lookAtDirection;
        this.color = color;
        this.speed = speed;
        this.timeToDelete = timeToDelete;
        this.shootDirection();
        setTimeout(() => {
            if(this.constructor.name == 'PlayerBullet'){
                deleteObjectFromArray(bulletPlayerArray, this);
            } else {
                deleteObjectFromArray(bulletEnemyArray, this);
            }
          }, this.timeToDelete);
    }
    draw()
    {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
    }
    shootDirection() {
        switch (this.lookAtDirection) {
            case 'left':
                this.directionX = -1;
                if(player.vertical == -1)  this.directionY = -1;
                else if (player.vertical == 1)  this.directionY = 1;
                else this.directionY = 0;
            break;
            case 'right':
                this.directionX = 1;
                if(player.vertical == -1)  this.directionY = -1;
                else if (player.vertical == 1)  this.directionY = 1;
                else this.directionY = 0;
            break;
            case 'up':
                this.directionY = -1;
                if(player.horizontal == -1)  this.directionX = -1;
                else if (player.horizontal == 1)  this.directionX = 1;
                else this.directionX = 0;
            break;
            case 'down':
                this.directionY = 1;
                if(player.horizontal == -1)  this.directionX = -1;
                else if (player.horizontal == 1)  this.directionX = 1;
                else this.directionX = 0;
            break;
        }
    }

    collisionWithTerrain() {
        wallBlockArray.forEach((object) => {
            if (object.x + object.width >= this.x && object.x < this.x + this.width && object.y + object.height >= this.y && object.y < this.y + this.height) {
                if(object.hasOwnProperty('hp'))
                {
                    object.hp--;
                }
                if(this.constructor.name == 'PlayerBullet'){
                    deleteObjectFromArray(bulletPlayerArray, this);
                } else {
                    deleteObjectFromArray(bulletEnemyArray, this);
                }
            }
        });
    }
    collisionWithTarget() {
        throw new Error('Metoda collisionWithTarget() musi zostać zaimplementowana przez klasę podrzędną.');

    }
    update() {
        this.collisionWithTerrain();
        this.collisionWithTarget();
        this.draw()
        this.x += this.speed * this.directionX;
        this.y += this.speed * this.directionY;
    }

}

class PlayerBullet extends Bullet {
    collisionWithTarget() {
        enemyArray.forEach((object) => {
            if (object.x + object.width >= this.x && object.x < this.x + this.width && object.y + object.height >= this.y && object.y < this.y + this.height) {
                object.hp--;
                deleteObjectFromArray(bulletPlayerArray, this);
            }
        });
    }


}

class EnemyBullet extends Bullet {

    collisionWithTarget() {
        if (player.x + player.width >= this.x && player.x < this.x + this.width && player.y + player.height >= this.y && player.y < this.y + this.height) {
            if(!player.untouchableBool)
            {
                player.takenDamage(3000);
                deleteObjectFromArray(bulletEnemyArray, this);
            }

        }
    }
}