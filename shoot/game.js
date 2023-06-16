var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

function Player(playerWidth,playerHeight, playerColor){
    this.playerWidth = playerWidth;
    this.playerHeight = playerHeight;
    this.playerColor = playerColor;
    this.x = mouse.x;
    this.y = mouse.y;
    this.draw = function()
    {
        c.beginPath();
        c.fillRect(this.x, this.y, this.playerWidth, this.playerHeight);
        c.fillStyle = this.playerColor;
        c.fill();
    }
    this.update = function()
    {
        this.x = mouse.x;
        this.y = mouse.y;
        this.draw();
    }

}




function getDistance(x1, y1, x2, y2)
{
    var dx = x2 - x1;
    var dy = y2 - y1;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
}

function createLaser() {
    if (document.hidden || document.visibilityState === 'hidden') {
        return; // Jeśli przeglądarka jest zminimalizowana, przerwij wywołanie
      }
    var width = 100;
    var height = 100;
    // if (Math.random() < 0.5) {
    //     if(Math.random() < 0.5)
    //     {
    //         x = width;
    //         var speedX = 10; 
    //         console.log('lewo');
    //     }
    //     else
    //     {
    //         x = innerWidth - width;
    //         var moveX = -10;
    //         console.log('prawo');
    //     }
    //     var y = Math.random() * (innerHeight - height * 2) + height;

    //   } 
    //   else {
    //     if(Math.random() < 0.5)
    //     {
    //         var y = height;
    //         var speedY = 10; 
    //         console.log('gora' + y);
    //     }
    //     else
    //     {
    //         var y = innerHeight - height;
    //         var moveY = -10;
    //         console.log('dol '+y+' : inner: ' + innerHeight +' height : '+ height );
    //     }
        
    //         var x = Math.random() * (innerWidth - width * 2) + width;

    //   }
     var x = Math.random() * (innerHeight - width * 2) + width;
    //   var speedX = 0;
    //   var speedY = -10;
    //   var y = innerWidth - height;
      // GORA I LEWO DZIALA KOLIZJA DOL I PRAWO DO NAPRAWY
        speedX = 12;

   laserArray.push(new Laser(x, y, width, height, speedX, speedY, moveX=0, moveY=0));
  }
  

function Laser(x,y, width, height, speedX, speedY, moveX, moveY)
{
    this.x = x;
    this.y = y || 4;
    this.width = width;
    this.height = height;
    this.speedX = speedX || 10;
    this.speedY = speedY || 13;
    this.moveX = moveX;
    this.moveY = moveY;
    c.fillStyle = 'red';  
    console.log('speedX: '+speedX+' speedY: '+speedY);
    this.draw = function()
    {
        c.beginPath();
        c.fillRect(this.x, this.y, this.width, this.height);

        c.fill;
    }
    this.update = function()
    {   
        this.speedY += this.speedX;
        this.height += this.speedY;
        this.x += this.moveX;
        this.y += this.moveY;
        // if(this.x + this.width > innerWidth || this.x - this.width < -15)
        // {
        //     const indexToRemove = laserArray.indexOf(this); // Znajdź indeks obiektu w tablicy
        //     if (indexToRemove !== -1) {
        //       laserArray.splice(indexToRemove, 1); // Usuń obiekt z tablicy
        //     };
        // }
        // if (mouse.x >= this.x && mouse.x <= this.x + this.width && mouse.y >= this.y && mouse.y <= this.y + this.height)
        // {
        //     console.log('kolizja');
        // }
        // else console.log('nie ma kolizji');
      //  console.log('Mouse X: '+ mouse.x +' Y: '+ mouse.y+' RED X: ' + this.x +' Y: '+this.y );
 
        if(mouse.x + playerWidth >= this.x && mouse.x < this.x + this.width && mouse.y + playerHeight >= this.y && mouse.y <this.y+this.height)
        {
                       const indexToRemove = laserArray.indexOf(this); // Znajdź indeks obiektu w tablicy
            if (indexToRemove !== -1) {
              laserArray.splice(indexToRemove, 1); // Usuń obiekt z tablicy
            };
        }
      this.draw(); 
    }

}
var playerWidth = 50;
var playerHeight = 50;
var playerColor = 'blue';
player = new Player(playerWidth, playerHeight, playerColor);
laserArray = []; 

 // setInterval(createLaser, 1000);
  createLaser();
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    player.update();
  
    for (let i = 0; i < laserArray.length; i++) {
      laserArray[i].update();
    }
  }
  
  animate();
  