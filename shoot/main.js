var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 800;

var c = canvas.getContext('2d');

arrayBlocks = [];
for (i = 1; i < 21; i++) {
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
var player = new Player(5, 5, 32, 32, 32, 'blue', 1);
var EnemyArray = [

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
  wallBlockArray.forEach(wallBlock => wallBlock.update());
  bulletPlayerArray.forEach(bulletPlayer => bulletPlayer.update());
  bulletEnemyArray.forEach(enemyBullet => enemyBullet.update());
  c.font = '20px Arial';
  c.fillStyle = 'black';
  c.fillText('Hp: ' + player.hp, 10, 20);
}

animate();