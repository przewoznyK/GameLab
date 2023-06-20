// Arrays

bulletPlayerArray = [];
bulletEnemyArray = [];
wallBlockArray = [];
itemsArray = [];
arrayBlocks = [];
enemyArray = [];

// Functions

const utils = {
    withGrid(n) {
        return n * 32;
    },
    asGridCoord(x,y) {
        return `${x*32},${y*32}`
    },
    walls: { },
    addWall(x, y){
        const gridCoord = utils.asGridCoord(x, y);
        utils.walls[gridCoord] = true;
      },
    deleteWall(x,y){
        utils.walls[`${x},${y}`] = false;
    },
    nextPosition(initialX, initialY, direction)
    {
        let x = initialX;
        let y = initialY;
        const size = 32;
        if(direction === "left") {
            x -= size;
        } else if (direction === "right") {
            x += size;
        } else if (direction === "up"){
            y -= size;
        } else if (direction === "down") {
            y += size;
        }
        return {x,y};
    }
}

function deleteObjectFromArray(array, object) {
    const indexToRemove = array.indexOf(object);
    if (indexToRemove !== -1) {
        array.splice(indexToRemove, 1); 
    }

}

function isSpaceTaken(currentX, currentY, direction)
{
    const {x,y} = utils.nextPosition(currentX, currentY, direction);
    return utils.walls[`${x},${y}`] || false;
}

function collision(checkingObject, targetObject)
{
    
    if(targetObject.x + targetObject.width >= checkingObject.x && targetObject.x < checkingObject.x + checkingObject.width && targetObject.y + targetObject.height >= checkingObject.y && targetObject.y < checkingObject.y + checkingObject.height)
    {

        var targetObjectHalfW = targetObject.width/2;
        var targetObjectHalfH = targetObject.height/2;
        var checkingObjectHalfW = checkingObject.width/2;
        var checkingObjectHalfH = checkingObject.height/2;
        var targetObjectCenterX = targetObject.x + targetObject.width/2;
        var targetObjectCenterY = targetObject.y + targetObject.height/2;
        var checkingObjectCenterX = checkingObject.x + checkingObject.width/2;
        var checkingObjectCenterY = checkingObject.y + checkingObject.width/2;

        var diffX = targetObjectCenterX - checkingObjectCenterX;
        var diffY = targetObjectCenterY - checkingObjectCenterY;

        var minXDist = targetObjectHalfW + checkingObjectHalfW;
        var minYDist = targetObjectHalfH + checkingObjectHalfH;

        var depthX = diffX > 0 ? minXDist - diffX : -minXDist - diffX;
        var depthY = diffY > 0 ? minYDist - diffY : -minYDist - diffY

        if(depthX != 0 && depthY != 0){
            if(Math.abs(depthX) < Math.abs(depthY)){
            // Collision along the X axis. React accordingly
            if(depthX > 0){
                // Left side collision
             //   console.log('LEFT');
            //    targetObject.canMoveLeftBool = false;
            //   targetObject.horizontal = 0;
                return 'left';
            }
            else{
                // Right side collision
                // console.log('RIGHT');
                // targetObject.canMoveRightBool = false;
                // targetObject.horizontal = 0;
                return 'right';
                }
            }
            else{
            // Collision along the Y axis.
            if(depthY > 0){
                // Top side collision
                // console.log('Up');
                // targetObject.canMoveUpBool = false;
                // targetObject.vertical = 0;
                return 'up';
            }
            else{
                // Bottom side collision
              //  checkingObject.canMoveDownBool = false;
                if(  checkingObject.vertical == -1)
                 checkingObject.vertical = 0;
                   console.log('Up');
                return 'down';
                }
            }
        
    }
    else {
        return 'none'
        targetObject.canMoveRightBool = true;
        targetObject.canMoveLeftBool = true;
        targetObject.canMoveUpBool = true;
        targetObject.canMoveDownBool = true;
        }

        }
}
