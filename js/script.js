var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var dogimage = new Image();
canvas.width = 60;
canvas.height = 45;
dogimage.src = "images/shadow_dog.png";
var spritewidth = 50;
var spriteheight = 45;
var gameframe = 0;

var action = 0;
var numberofframes = 7;

function animate(){
    ctx.clearRect(0, 0, 50, 45);
    var position = Math.floor((gameframe / 5)%7);
    var framex = spritewidth * position
    ctx.drawImage(dogimage, framex, action, spritewidth , spriteheight , 0, 0, spritewidth, spriteheight);
    gameframe++;
    requestAnimationFrame(animate);
};
animate();

var moveby = 1;
var x = 50;
var y = 10;

window.addEventListener("load", (e) => {
    canvas.style.position = "absolute";
    canvas.style.left = x + "%";
    canvas.style.bottom = y + "%"
});

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            if (canvas.style.left != "10%") {
                action = spriteheight*3;
                numberofframes = 9;
                canvas.style.left = x - moveby + "%";
                x -= moveby;
                break;
            }
            else{
                break;
            }
        case "ArrowRight":
            if (canvas.style.left != "90%") {
                action = spriteheight*3;
                numberofframes = 9;
                canvas.style.left = x + moveby + "%"
                x += moveby;
                break;
            }
            else{break;}
        case "ArrowUp":
            if (canvas.style.bottom != "90%") {
                action = spriteheight*3;
                numberofframes = 9;
                canvas.style.bottom = y + moveby + "%"
                y += moveby;
                break;
            }
            else{break;}
        case "ArrowDown":
            if (canvas.style.bottom != "10%") {
                action = spriteheight*3;
                numberofframes = 9;
                canvas.style.bottom = y - moveby + "%"
                y -= moveby;
                break;
            }
            else{break;}
    }
});