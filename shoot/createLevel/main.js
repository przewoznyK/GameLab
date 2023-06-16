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
var wall = new WallBlock(5, 5, 32, 32, 'black');
function clickMouseLeftButton() {
    document.addEventListener("click", function (event) {
        if (!CantPlaceObject(wall.x, wall.y)) {
            wallBlockArray.push(new WallBlock(wall.x / 32, wall.y / 32, 32, 32, 'black'));

        }
    });
}
function clickMouseRightButton() {
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        if (CantPlaceObject(wall.x, wall.y)) {
            console.log(wallBlockArray);
            let obj = wallBlockArray.find(obj => obj.x === wall.x && obj.y === wall.y);
            if (obj) {
                deleteObjectFromArray(wallBlockArray, obj);
                utils.deleteWall(wall.x, wall.y);
                console.log(utils.walls);

            }
        }

    });

}
function CantPlaceObject(currentX, currentY) {
    console.log(currentX + '   ' + currentY);
    return utils.walls[`${currentX},${currentY}`] || false;
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    wall.update();
    // console.log('Pozycja X: ' + mouse.x + ' Pozycja Y:' + mouse.y);
    // wall.x = mouse.x-16;
    //  wall.y = mouse.y-16;
    if (mouse.x - 32 > wall.x) wall.x += 32;
    else if (mouse.x < wall.x) wall.x -= 32;
    if (mouse.y - 32 > wall.y) wall.y += 32;
    else if (mouse.y < wall.y) wall.y -= 32;
    wallBlockArray.forEach(wallBlock => wallBlock.update());

}
clickMouseLeftButton();
clickMouseRightButton();
animate();
