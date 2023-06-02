var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');





// Create a player
var player = new Player(50, 50, 25, 25, 1, 'blue');
var block = new WallBlock(120, 120, 25, 25, 'black');
block.draw();
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    player.update();
    block.update();
}

animate();