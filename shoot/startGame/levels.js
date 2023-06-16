class Levels {
    static nextLevel() {
        this.prepareForNextLevel();
        this.makeWalls();
        switch (levelCount) {
            case 1:
                this.levelOne();
                break;
            case 2:
                this.levelTwo();
                break;
        }
    }
    static prepareForNextLevel() {
        bulletPlayerArray = [];
        bulletEnemyArray = [];
        wallBlockArray = [];
        itemsArray = [];
        arrayBlocks = [];
        enemyArray = [];

    }
    static makeWalls() {
        for (let i = 1; i < 21; i++) {
            wallBlockArray.push(new WallBlock(i, 1, 32, 32, 'black'));
            wallBlockArray.push(new WallBlock(1, i, 32, 32, 'black'));
            wallBlockArray.push(new WallBlock(i, 20, 32, 32, 'black'));
            wallBlockArray.push(new WallBlock(20, i, 32, 32, 'black'));
        }
    }
    // level for testing
    static levelZero() {
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
        enemyArray = [
            new EnemyX(8, 5, 32, 32, 32, 'red', 3, 'right'),
            new EnemyY(8, 8, 32, 32, 32, 'green', 3, 'up'),
            new EnemyFollowingPlayer(10, 10, 32, 32, 32, 'yellow', 3, 'up'),
            new EnemyNotMoving(16, 10, 32, 32, 32, 'orange', 3, 'left'),
        ]
    }
    static levelOne() {
        player.x = utils.withGrid(3);
        player.y = utils.withGrid(3);
        player.lookAtDirection = 'right';

    }
    static levelTwo() {

    }
}

