class Item {
    constructor(x, y, width, height) {
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        this.width = width;
        this.height = height;
    }
    draw() {
        throw new Error('The draw() method must be implemented by the subclass.');
    }
    checkCollsionWithPlayer() {
        throw new Error('The checkColllsionWithPlayer() method must be implemented by the subclass.');
    }
    update() {
        this.checkCollsionWithPlayer();
        this.draw();
    }
}

class HpItem extends Item{
    checkCollsionWithPlayer() {
        if (player.x + player.width >= this.x + 5 && player.x < this.x + this.width && player.y + player.height >= this.y + 5 && player.y < this.y + this.height) {
            player.hp++;
            deleteObjectFromArray(itemsArray, this);
        }
    }
    draw(){
        c.beginPath();
        c.fillStyle = 'red';
        c.fillRect(this.x, this.y + this.height / 3, this.width, this.height / 3);
        c.fillRect(this.x + this.width / 3, this.y, this.width / 3, this.height);
        c.fill();
    }
}