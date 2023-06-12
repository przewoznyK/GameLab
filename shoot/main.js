var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

arrayBlocks = [];
for(i=1; i<21; i++)
{
  wallBlockArray.push(new WallBlock(i, 1, 32, 32, 'black'));
  wallBlockArray.push(new WallBlock(1, i, 32, 32, 'black'));
  wallBlockArray.push(new WallBlock(i, 20, 32, 32, 'black'));
  wallBlockArray.push(new WallBlock(20, i, 32, 32, 'black'));
}
wallBlockArray.push(new WallBlock(10, 2, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 3, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 4, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 5, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 6, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 15, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 16, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 17, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 18, 32, 32, 'black'));
wallBlockArray.push(new WallBlock(10, 19, 32, 32, 'black'));
var player = new Player(5, 5, 32, 32, 1, 'blue');
var EnemyArray = [
  new Enemy(6,6, 32,32, 'red', 5, 'right'),
  new EnemyY(8,8, 32,32, 'green', 5, 'up'),
  new EnemyFollowPlayer(10,10, 32,32, 'yellow', 5, 'up'),
]
walls = {

  };

  setInterval(() => {
    EnemyArray.forEach(element => {
      element.timeoutUpdate();
    })
  }, 500);
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    player.update();
  EnemyArray.forEach(element => {
    element.update();
  })
    wallBlockArray.forEach(wallBlock =>  wallBlock.update());
    bulletPlayerArray.forEach(bulletPlayer =>  bulletPlayer.update());
}

animate();