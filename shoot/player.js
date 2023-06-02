class Player
{
    horizontal = 0;
    vertical = 0;
    canMoveLeftBool = true;
    canMoveRightBool = true;
    canMoveUpBool = true;
    canMoveDownBool = true;
    canMoveBool = true;
    eyePositionX = 0;
    eyePositionY = 0;
    lookAtDirection = 'right';
    constructor(x, y, width, height, speed, color)
    {
        this.x = x * 32;
        this.y = y * 32;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = color;
    }
    // Eye position
    lookAt(direction)
    {
        switch (direction){
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
    draw()
    {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
        c.beginPath();
        c.fillStyle = 'black';
        c.fillRect(this.eyePositionX, this.eyePositionY, this.width/2, this.height/4);
        c.fill;
    }
    move()
    {
        if(this.canMoveBool)
        {
            document.onkeydown  = (e) => {
                switch(e.key){
                    case 'a':
                        if(this.canMoveLeftBool) {
                            this.horizontal = -1;
                            this.lookAtDirection = 'left';
                        }
                    break;
                    case 'd':
                        if(this.canMoveRightBool) {
                            this.horizontal = 1;
                            this.lookAtDirection = 'right';
                        }
                    break;
                    case 'w':
                        if(this.canMoveUpBool){
                            this.vertical = -1;
                            this.lookAtDirection = 'up';
                        }
                  
                    break;
                    case 's':
                        if(this.canMoveDownBool) {
                           this.vertical = 1;
                           this.lookAtDirection = 'down';
                        }
                    break;
                    case ' ':
                        bulletPlayerArray.push(new PlayerBullet(this.x, this.y, this.lookAtDirection));
                        bulletPlayerArray[0].update();
                    break;
                }
          };
        document.onkeyup = (e) => {
            if(e.key == 'a' || e.key == 'd') this.horizontal = 0;
            if(e.key == 'w' || e.key == 's') this.vertical = 0;
        }

        this.x = this.x + this.speed * this.horizontal;
        this.y = this.y + this.speed * this.vertical;
       
        
        }

    }
    update(){
        this.move();
        this.lookAt(this.lookAtDirection );
        this.draw();
    }
}
