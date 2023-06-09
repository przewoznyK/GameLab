class MouseManagerMovement {
    static mouseMovement(object) {
        activeLayer = MouseManagerMovement.layersDetector();
        if (object !== null) {
            if (activeLayer == 'gameLayer') {
                if (mouse.x - 32 > object.x) object.x += 32;
                else if (mouse.x < object.x) object.x -= 32;
                if (mouse.y - 32 > object.y) object.y += 32;
                else if (mouse.y < object.y) object.y -= 32;
                if (object.direction !== null) {
                    object.eyePositionX = object.x + 11;
                    object.eyePositionY = object.y + 5;
                }
                object.draw();
            }
        }
    }
    static createObjectToFollowingMouse(name) {
        switch (name) {
            case 'player':
                activeObject = new Player(21, 5, 32, 32, 'blue');
                break;
            case 'wallblock':
                activeObject = new WallBlock(21, 5, 32, 32, 'black');
                break;
            case 'enemyX':
                activeObject = new EnemyX(21, 5, 32, 32, 'red');
                break;
            case 'enemyY':
                activeObject = new EnemyY(21, 5, 32, 32, 'green');
                break;
            case 'enemyFollowingPlayer':
                activeObject = new EnemyFollowingPlayer(21, 5, 32, 32, 'yellow');
                break;
            case 'enemyNotMoving':
                activeObject = new EnemyNotMoving(21, 5, 32, 32, 'orange');
                break;
            case 'nullBlock':
                activeObject = new WallBlock(21, 5, 32, 32, 'white');
                break;
        }
        // Change checkbox color
        optionsCheckboxArray.forEach(option => {
            if (option.checked) {
                option.checked = false;
            }
            if (option.name == name) option.checked = true;
        });

    }
    static layersDetector() {
        for (const layer of layersArray) {
            if (
                mouse.x > layer.x &&
                mouse.x < layer.x + layer.width &&
                mouse.y > layer.y &&
                mouse.y < layer.y + layer.height
            ) {

                return layer.name;
            }
        }
        return 'none';
    }
    static CantPlaceObject(currentX, currentY) {
        return utils.walls[`${currentX},${currentY}`] || false;
    }
}

class MouseManagerLeftButton {
    static clickMouseLeftButton() {
        document.addEventListener("click", (event) => {
            if (activeLayer == "gameLayer" && activeObject !== null) {
                if (!MouseManagerMovement.CantPlaceObject(activeObject.x, activeObject.y)) {
                    this.createObjectInMap();
                }
            }
            else if (activeLayer == "checkboxLayer") {
                this.selectAnObject();
            }
            else if (activeLayer == "buttonLayer") {
                // SaveLevel
                var inputElement = document.getElementsByName("nameLevel")[0];
                var nameLevel = inputElement.value;
                console.log(addedObjectArray);
                if(nameLevel == ''){
                    sendDataToPhp.sendDataStatusText('noNameLevel');

                }
                else if (!addedObjectArray.find(obj => obj.type === 'player')) {
                    sendDataToPhp.sendDataStatusText('noPlayer');
                }
                else if(!addedObjectArray.find(obj => obj.type === 'enemyX' || obj.type === 'enemyY' || obj.type === 'enemyFollowingPlayer' || obj.type === 'enemyNotMoving'))
                {
                    sendDataToPhp.sendDataStatusText('noEnemy');
                }
                else {
                    sendDataToPhp.sendDataStatusText('success');
                    sendDataToPhp.sendAddedObjects(nameLevel, addedObjectArray);

                }
            }
        });
    }
    // Game section

    static createObjectInMap() {
        switch (activeObject.type) {
            case 'player':
                addedObjectArray.push(new Player(activeObject.x / 32, activeObject.y / 32, 32, 32, 'blue'));
                let block = optionsCheckboxArray.find(obj => obj.name === 'player');
                utils.addWall(activeObject.x / 32, activeObject.y / 32);
                block.checked = false;
                block.blocked = true;
                activeObject = new nullBlock(activeObject.x / 32, activeObject.y / 32, 32, 32, 'white');
                break;
            case 'enemyX':
                addedObjectArray.push(new EnemyX(activeObject.x / 32, activeObject.y / 32, 32, 32, 'red'));
                utils.addWall(activeObject.x / 32, activeObject.y / 32);
                break;
            case 'enemyY':
                addedObjectArray.push(new EnemyY(activeObject.x / 32, activeObject.y / 32, 32, 32, 'green'));
                utils.addWall(activeObject.x / 32, activeObject.y / 32);
                break;
            case 'enemyFollowingPlayer':
                addedObjectArray.push(new EnemyFollowingPlayer(activeObject.x / 32, activeObject.y / 32, 32, 32, 'yellow'));
                utils.addWall(activeObject.x / 32, activeObject.y / 32);
                break;
            case 'enemyNotMoving':
                addedObjectArray.push(new EnemyNotMoving(activeObject.x / 32, activeObject.y / 32, 32, 32, 'orange'));
                utils.addWall(activeObject.x / 32, activeObject.y / 32);
                break;
            case 'wallblock':
                addedObjectArray.push(new WallBlock(activeObject.x / 32, activeObject.y / 32, 32, 32, 'black'));
                break;
        }
    }

    // Checkbox section
    static selectAnObject() {
        for (const option of optionsCheckboxArray) {
            if (
                mouse.x > option.x &&
                mouse.x < option.x + option.width &&
                mouse.y > option.y &&
                mouse.y < option.y + option.height &&
                option.blocked == false
            ) {
                MouseManagerMovement.createObjectToFollowingMouse(option.name);
                break;
            }
        }
    }
}

class MouseManagerRightButton {
    static clickMouseRightButton() {
        document.addEventListener("contextmenu", function (event) {
            event.preventDefault();
            if (MouseManagerMovement.CantPlaceObject(activeObject.x, activeObject.y)) {
                let obj = addedObjectArray.find(obj => obj.x === activeObject.x && obj.y === activeObject.y);
                if (obj) {
                    deleteObjectFromArray(addedObjectArray, obj);
                    utils.deleteWall(activeObject.x, activeObject.y);
                    // Unblock player checkbox
                    if (obj.type == 'player') {
                        let unblock = optionsCheckboxArray.find(option => option.name === 'player');
                        unblock.blocked = false;
                    }

                }
            }

        });

    }
}