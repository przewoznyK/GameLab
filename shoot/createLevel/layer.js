class Layer{
    constructor(x, y, width, height, name, color, actived = true)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.color = color;
        this.actived = actived;
    }
    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);

    }
}