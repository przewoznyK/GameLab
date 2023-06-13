class WallBlock
{
    constructor(x, y, width, height, color)
    {
        utils.addWall(x, y);
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        console.log(this.x);
        this.width = width;
        this.height = height;
        this.color = color;

        console.log(utils.walls);
    }
    draw()
    {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;

    }
    update()
    {
        this.draw();
    }
}