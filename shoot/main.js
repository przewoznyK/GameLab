var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



wallBlockArray.push(new WallBlock(1, 1, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(2, 2, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(2,1, 32, 32, 'black'));

var player = new Player(5, 5, 32, 32, 1, 'blue');

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    player.update();

    wallBlockArray.forEach(wallBlock =>  wallBlock.update());
    bulletPlayerArray.forEach(bulletPlayer =>  bulletPlayer.update());

}

animate();