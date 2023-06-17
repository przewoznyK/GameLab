class Player {
    horizontal = 0;
    vertical = 0;
    canMoveLeftBool = true;
    canMoveRightBool = true;
    canMoveUpBool = true;
    canMoveDownBool = true;
    canMoveBool = true;
    eyePositionX = 0;
    eyePositionY = 0;
    lookAtDirection = 'down';
    collisionResult = 'none';
    untouchableBool = false;
    constructor(x, y, width, height, color, speed=32, hp = 3) {
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = color;
        this.hp = hp;
        this.type = 'player';
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

    takenDamage(seconds) {
        this.hp--;
        this.color = 'grey';
        this.untouchableBool = true;
        setTimeout(() => {
            this.untouchableBool = false;
            this.color = 'blue';
        }, seconds)
    }


    draw() {
        // Player square
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
        // Player border
        c.lineWidth = 2; 
        c.rect(this.x, this.y, this.width, this.height); 
        c.stroke();     
        // Eye
        c.beginPath();
        c.fillStyle = 'black';
        c.fillRect(this.eyePositionX, this.eyePositionY, this.width / 2, this.height / 4);
        c.fill;
        this.lookAt(this.lookAtDirection);
    }

    move() {
        if (this.canMoveBool) {
            document.onkeydown = (e) => {
                switch (e.key) {
                    case 'a':
                         this.lookAtDirection = 'left';
                        if (!isSpaceTaken(this.x, this.y, 'left')) {
                           
                            this.x -= this.speed;
                        }
                        break;
                    case 'd':
                       this.lookAtDirection = 'right'; 
                        if (!isSpaceTaken(this.x, this.y, 'right')) {
                            this.x += this.speed;
                        }
                        break;
                    case 'w':
                        this.lookAtDirection = 'up';
                        if (!isSpaceTaken(this.x, this.y, 'up')) {
                            this.y -= this.speed;
                        }
                        break;
                    case 's':
                        this.lookAtDirection = 'down';
                        if (!isSpaceTaken(this.x, this.y, 'down')) {
                            this.y += this.speed;
                        }
                        break;
                    case ' ':
                        bulletPlayerArray.push(new PlayerBullet(this.x, this.y, this.lookAtDirection, this.color));
                        break;

                }
            };
            document.onkeyup = (e) => {
                if (e.key == 'a' || e.key == 'd') this.horizontal = 0;
                if (e.key == 'w' || e.key == 's') this.vertical = 0;
            }
        }
    }
    update() {
        this.move();
        this.draw();
    }
}