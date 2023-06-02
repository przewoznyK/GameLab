// Arrays

bulletPlayerArray = [];
wallBlockArray = [];
// Functions
function collision(checkingObject, targetObject)
{
    
    if(targetObject.x + targetObject.width >= checkingObject.x && targetObject.x < checkingObject.x + checkingObject.width && targetObject.y + targetObject.height >= checkingObject.y && targetObject.y < checkingObject.y + checkingObject.height)
    {
        if(targetObject === player)
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
                console.log('LEFT');
                targetObject.canMoveLeftBool = false;
                targetObject.horizontal = 0;
            }
            else{
                // Right side collision
                console.log('RIGHT');
                targetObject.canMoveRightBool = false;
                targetObject.horizontal = 0;
                }
            }
            else{
            // Collision along the Y axis.
            if(depthY > 0){
                // Top side collision
                console.log('Up');
                targetObject.canMoveUpBool = false;
                targetObject.vertical = 0;
            }
            else{
                // Bottom side collision
                console.log('DOWN');
                targetObject.canMoveDownBool = false;
                targetObject.vertical = 0;
                }
            }
        }
    }
    else {
        targetObject.canMoveRightBool = true;
        targetObject.canMoveLeftBool = true;
        targetObject.canMoveUpBool = true;
        targetObject.canMoveDownBool = true;
        }

        }
}
