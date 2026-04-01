const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const grid = 20
let score = 0

let snake = [
    {x:200, y:200}
]

let dx = grid
let dy = 0

let food = {
    x: Math.floor(Math.random()*40)*grid,
    y: Math.floor(Math.random()*30)*grid
}

document.addEventListener("keydown", direction)

function direction(e){

    if(e.key === "ArrowLeft" && dx === 0){
        dx = -grid
        dy = 0
    }

    else if(e.key === "ArrowUp" && dy === 0){
        dx = 0
        dy = -grid
    }

    else if(e.key === "ArrowRight" && dx === 0){
        dx = grid
        dy = 0
    }

    else if(e.key === "ArrowDown" && dy === 0){
        dx = 0
        dy = grid
    }
}

function gameLoop(){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    let head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    }

    snake.unshift(head)

    if(head.x === food.x && head.y === food.y){

        score++
        document.getElementById("score").innerText = "Score : " + score

        food = {
            x: Math.floor(Math.random()*40)*grid,
            y: Math.floor(Math.random()*30)*grid
        }

    } else {
        snake.pop()
    }

    ctx.fillStyle = "red"
    ctx.fillRect(food.x, food.y, grid, grid)

    ctx.fillStyle = "lime"
    snake.forEach(part =>{
        ctx.fillRect(part.x, part.y, grid, grid)
    })

    if(head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height){
        alert("Game Over! Score kamu : " + score)
        location.reload()
    }

    for(let i=1;i<snake.length;i++){
        if(head.x === snake[i].x && head.y === snake[i].y){
            alert("Game Over! Score kamu : " + score)
            location.reload()
        }
    }

}

setInterval(gameLoop,100)