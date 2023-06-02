class WallBlock
{
    constructor(x, y, width, height, color)
    {
        this.x = x * 32;
        this.y = y * 32;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw()
    {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill;
        collision(this, player);
    }

    update()
    {
        this.draw();
    }
}