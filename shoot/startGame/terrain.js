class WallBlock {
    constructor(x, y, width, height, color) {
        utils.addWall(x, y);
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        this.width = width;
        this.height = height;
        this.color = color;
        this.type = 'wallblock';
    }

    draw() {
        // Wall block square
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
        // Wall block border
        c.lineWidth = 2;
        c.rect(this.x, this.y, this.width, this.height);
        c.stroke();
    }

    static drawContent() {
        // Wall block square
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
        // Wall block border
        c.lineWidth = 2;
        c.rect(this.x, this.y, this.width, this.height);
        c.stroke();
    }
    update() {
        this.draw();
    }
}

class Block {
    constructor(x, y, width, height, color, hp = 3) {
        utils.addWall(x, y);
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        this.width = width;
        this.height = height;
        this.color = color;
        this.hp = hp;
        this.type = 'block';
    }
    draw() {
        // Block square
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
        // Block border
        c.lineWidth = 2;
        c.rect(this.x, this.y, this.width, this.height);
        c.stroke();
    }
    update() {
        if (this.hp <= 0) {
            deleteObjectFromArray(wallBlockArray, this);
            utils.deleteWall(this.x, this.y);
        }
        this.draw();
    }
}

class nullBlock {
    constructor(x, y, width, height, color) {
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        this.width = width;
        this.height = height;
        this.color = color;
        this.type = 'nullBlock';
    }
    draw() {
        // Block square
        c.beginPath();
        c.fillStyle = "rgba(0, 0, 0, 0.5)";
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
    }
    update() {
        this.draw();
    }
}

