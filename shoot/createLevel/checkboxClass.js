class CheckboxObject {
    constructor(x, y, width, height, name, checked = false) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.checked = checked;
        this.blocked = false;
    }

    draw() {
        if (this.blocked) {
            c.fillStyle = 'red';
        }
        else if (this.checked) {
            c.fillStyle = 'green';
        }
        else c.fillStyle = 'lightgray';
        c.fillRect(this.x, this.y, this.width, this.height);

        this.drawContentCheckbox();
    }
    drawContentCheckbox() {
        if (this.name == 'player') {
            // Player square
            c.beginPath();
            c.fillStyle = 'blue';
            c.fillRect(this.x + 4, this.y + 4, 32, 32);
            c.fill;
            // Player border
            c.lineWidth = 2;
            c.rect(this.x + 4, this.y + 4, 32, 32);
            c.stroke();
            // Eye
            c.beginPath();
            c.fillStyle = 'black';
            c.fillRect(this.x + 11, this.y + 8, this.width / 2, this.height / 4);
            c.fill;
        }
        else if (this.name == 'wallblock') {
            // Wall block square
            c.beginPath();
            c.fillStyle = 'black';
            c.fillRect(this.x + 4, this.y + 4, 32, 32);
            c.fill;
            // Wall block border
            c.lineWidth = 2;
            c.rect(this.x + 4, this.y + 4, 32, 32);
            c.stroke();
        }

    }
}