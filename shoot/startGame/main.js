var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 800;

var c = canvas.getContext('2d');


var player = new Player(5, 5, 32, 32, 32, 'blue', 1);

var levelCount = 1;
Levels.nextLevel();


itemsArray = [
  new HpItem(5, 15, 32, 32, 'red'),
];
setInterval(() => {
  enemyArray.forEach(element => {
    element.timeOutUpdate();
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

  if (enemyArray.length === 0) {
    levelCount++;
    Levels.nextLevel();
  }
}

animate();

