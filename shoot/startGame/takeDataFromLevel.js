class DataFromSavedLevel {

  static takeDataFromUrl() {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(window.location.search);
      const levelName = params.get('levelName');
      const levelDataURL = '../createLevel/createdLevels/' + levelName;
      fetch(levelDataURL)
        .then(response => {
          if (!response.ok) {
            resolve(false);
          } else {
            return response.json();
          }
        })
        .then(data => {
          this.addDataToGame(data);
          resolve(true);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static addDataToGame(data) {
    data.forEach(element => {
      switch (element['type']) {
        case 'player':
          player.x = element['x'];
          player.y = element['y'];
          break;
        case 'enemyX':
          enemyArray.push(new EnemyX(element['x'] / 32, element['y'] / 32, 32, 32,  element['color']));
          break;
        case 'enemyY':
          enemyArray.push(new EnemyY(element['x'] / 32, element['y'] / 32, 32, 32,  element['color']));
          break;
        case 'enemyFollowingPlayer':
          enemyArray.push(new EnemyFollowingPlayer(element['x'] / 32, element['y'] / 32, 32, 32,  element['color']));
          break;
        case 'enemyNotMoving':
          enemyArray.push(new EnemyNotMoving(element['x'] / 32, element['y'] / 32, 32, 32, element['color'] ));
          break;
        case 'wallblock':
          console.log('wallblock');
          wallBlockArray.push(new WallBlock(element['x'] / 32, element['y'] / 32, 32, 32, 'black'));
          break;

      }
    });
  }
}

