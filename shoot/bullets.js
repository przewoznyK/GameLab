
class Bullet {
    directionX = 1;
    directionY = 1;
    constructor(x, y, lookAtDirection, color, speed = 5, timeToDelete = 2000) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.lookAtDirection = lookAtDirection;
        this.color = color;
        this.speed = speed;
        this.timeToDelete = timeToDelete;
        this.shootDirection();
        setTimeout(() => {
            this.deleteObject();
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
    deleteObject() {
        throw new Error('Metoda deleteObject() musi zostać zaimplementowana przez klasę podrzędną.');
    }

    collisionWithTerrain() {
        wallBlockArray.forEach((object) => {
            if (object.x + object.width >= this.x && object.x < this.x + this.width && object.y + object.height >= this.y && object.y < this.y + this.height) {
                this.deleteObject();
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
    deleteObject() {
        const indexToRemove = bulletPlayerArray.indexOf(this);
        if (indexToRemove !== -1) {
            bulletPlayerArray.splice(indexToRemove, 1); // Usuń obiekt z tablicy
        }
    }

    collisionWithTarget() {
        EnemyArray.forEach((object) => {
            if (object.x + object.width >= this.x && object.x < this.x + this.width && object.y + object.height >= this.y && object.y < this.y + this.height) {
                object.hp--;
                this.deleteObject();
            }
        });
    }


}

class EnemyBullet extends Bullet {
    deleteObject() {
        const indexToRemove = bulletEnemyArray.indexOf(this);
        if (indexToRemove !== -1) {
            bulletEnemyArray.splice(indexToRemove, 1); // Usuń obiekt z tablicy
        }
    }

    collisionWithTarget() {
        if (player.x + player.width >= this.x && player.x < this.x + this.width && player.y + player.height >= this.y && player.y < this.y + this.height) {
            if(!player.untouchableBool)
            {
                player.takenDamage(3000);
                this.deleteObject();
            }

        }
    }
}