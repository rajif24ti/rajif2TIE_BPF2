const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gravity = 0.5;

let player = {
x: 100,
y: 300,
width: 40,
height: 40,
dx: 0,
dy: 0,
speed: 5,
jumpPower: -12,
grounded: false
};

let keys = {};

let platforms = [
{ x:0, y:350, width:800, height:50 },
{ x:200, y:280, width:120, height:20 },
{ x:400, y:230, width:120, height:20 },
{ x:600, y:180, width:120, height:20 }
];

document.addEventListener("keydown", (e)=>{
keys[e.key] = true;
});

document.addEventListener("keyup", (e)=>{
keys[e.key] = false;
});

function update(){

if(keys["ArrowRight"]) player.dx = player.speed;
else if(keys["ArrowLeft"]) player.dx = -player.speed;
else player.dx = 0;

if(keys[" "] && player.grounded){
player.dy = player.jumpPower;
player.grounded = false;
}

player.dy += gravity;

player.x += player.dx;
player.y += player.dy;

player.grounded = false;

for(let p of platforms){

if(
player.x < p.x + p.width &&
player.x + player.width > p.x &&
player.y < p.y + p.height &&
player.y + player.height > p.y
){

if(player.dy > 0){
player.y = p.y - player.height;
player.dy = 0;
player.grounded = true;
}

}

}

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "green";
for(let p of platforms){
ctx.fillRect(p.x,p.y,p.width,p.height);
}

ctx.fillStyle = "red";
ctx.fillRect(player.x,player.y,player.width,player.height);

}

function gameLoop(){

update();
draw();

requestAnimationFrame(gameLoop);

}

gameLoop();