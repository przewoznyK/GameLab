class MouseManagerMovement {
    static mouseMovement(object) {
        activeLayer = MouseManagerMovement.layersDetector();
        if (object !== null) {
            if (activeLayer == 'gameLayer') {
                // object.x = mouse.x - 16;
                // object.y = mouse.y - 16;
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
        if (name == 'player') {
            activeObject = new Player(21, 5, 32, 32, 'blue');
        }
        else if (name == 'wallblock') {
            activeObject = new WallBlock(21, 5, 32, 32, 'black');
        }
        else null;
        // Change checkbox color
        optionsCheckboxArray.forEach(option => {
            if (option.checked) {
                option.checked = false;
            }
            if (option.name == name) option.checked = true;
            //console.log(option.name + ' => ' +option.checked);

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
}

class MouseManagerLeftButton {
    // Game section

    static CantPlaceObject(currentX, currentY) {
        return utils.walls[`${currentX},${currentY}`] || false;
    }
    static createObjectInMap() {
        console.log(activeObject.type);
        switch (activeObject.type) {
            case 'player':
                addedObjectArray.push(new Player(activeObject.x / 32, activeObject.y / 32, 32, 32, 'blue'));
                let block = optionsCheckboxArray.find(obj => obj.name === 'player');
                block.blocked = true;
                activeObject = null;
                break;
            case 'wallblock':
                addedObjectArray.push(new WallBlock(activeObject.x / 32, activeObject.y / 32, 32, 32, 'black'));
                break;
        }
    }
    static clickMouseLeftButton() {
        document.addEventListener("click", (event) => {
            if (activeLayer == "gameLayer" && activeObject !== null) {
                if (!this.CantPlaceObject(activeObject.x, activeObject.y)) {
                    this.createObjectInMap();
                }
            }
            else if (activeLayer == "checkboxLayer") {
                this.selectAnObject();
            }
        });
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