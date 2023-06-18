var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 800;


var c = canvas.getContext('2d');
var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

var addedObjectArray = [];
var layersArray = [];
var optionsCheckboxArray = [];
var activeLayer = 'none';

layersArray.push(new Layer(700, 10, 80, 120, 'checkboxLayer', 'lightblue'));
layersArray.push(new Layer(31, 31, 640, 640, 'gameLayer', 'lightgreen'));

optionsCheckboxArray.push(new CheckboxObject(720, 32, 40, 40, 'player'));
optionsCheckboxArray.push(new CheckboxObject(720, 96, 40, 40, 'wallblock'));

for (let i = 1; i < 21; i++) {
    wallBlockArray.push(new WallBlock(i, 1, 32, 32, 'black'));
    wallBlockArray.push(new WallBlock(1, i, 32, 32, 'black'));
    wallBlockArray.push(new WallBlock(i, 20, 32, 32, 'black'));
    wallBlockArray.push(new WallBlock(20, i, 32, 32, 'black'));
}
var activeObject = new nullBlock(21, 5, 32, 32, 'white');

var wall = new WallBlock(5, 5, 32, 32, 'black');

function clickMouseRightButton() {
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        if (CantPlaceObject(wall.x, wall.y)) {
            console.log(wallBlockArray);
            let obj = wallBlockArray.find(obj => obj.x === wall.x && obj.y === wall.y);
            if (obj) {
                deleteObjectFromArray(wallBlockArray, obj);
                utils.deleteWall(wall.x, wall.y);
            }
        }
    });

}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    layersArray.forEach(layer => layer.draw());
    wallBlockArray.forEach(wallBlock => wallBlock.update());
    optionsCheckboxArray.forEach(option => option.draw());
    addedObjectArray.forEach(object => object.draw());
    MouseManagerMovement.mouseMovement(activeObject);

}
MouseManagerLeftButton.clickMouseLeftButton();
MouseManagerRightButton.clickMouseRightButton();
animate();
