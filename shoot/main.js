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
wallBlockArray.push(new Block(8, 18, 32, 32, 'brown'));
wallBlockArray.push(new Block(7, 18, 32, 32, 'brown'));
wallBlockArray.push(new Block(6, 18, 32, 32, 'brown'));
wallBlockArray.push(new Block(5, 18, 32, 32, 'brown'));
var player = new Player(5, 5, 32, 32, 32, 'blue', 1);
var enemyArray = [
  new EnemyX(8, 5, 32, 32, 32, 'red', 3, 'right'),
  new EnemyY(8, 8, 32, 32, 32, 'green', 3, 'up'),
  new EnemyFollowingPlayer(10, 10, 32, 32, 32, 'yellow', 3, 'up'),
  new EnemyNotMoving(16, 10, 32, 32, 32, 'orange', 3, 'left'),
]


itemsArray = [
  new HpItem(5, 15, 32, 32, 'red'),
];
setInterval(() => {
  enemyArray.forEach(element => {
    element.timeoutUpdate();
  })
}, 500);
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  player.update();
  enemyArray.forEach(element => {
    element.update();
  })
  wallBlockArray.forEach(wallBlock => wallBlock.update());
  bulletPlayerArray.forEach(bulletPlayer => bulletPlayer.update());
  bulletEnemyArray.forEach(enemyBullet => enemyBullet.update());
  itemsArray.forEach(items => items.update());

  c.font = '20px Arial';
  c.fillStyle = 'black';
  c.fillText('Hp: ' + player.hp, 10, 20);
}

animate();