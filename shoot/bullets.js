class PlayerBullet{
    speed = 5;
    directionX = 1;
    directionY = 1;
    timeToDelete = 2000;
    constructor(x,y, lookAtDirection){
        this.x = x;
        this.y = y;
        this.lookAtDirection = lookAtDirection;
        this.shootDirection();
        setTimeout(() => {
            this.deleteObject();
          }, this.timeToDelete);
    }
    draw()
    {
        c.beginPath();
        c.fillStyle = 'green';
        c.fillRect(this.x, this.y, 10, 10);
        c.fill;
    }
    shootDirection()
    {
        console.log(player.horizontal);
        switch (this.lookAtDirection){
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
    deleteObject()
    {
        const indexToRemove = bulletPlayerArray.indexOf(this);
        if (indexToRemove !== -1) {
            bulletPlayerArray.splice(indexToRemove, 1); // Usuń obiekt z tablicy
        }

    }


    update()
    {
        this.draw()
        this.x += this.speed * this.directionX;
        this.y += this.speed * this.directionY;
    }
    
}