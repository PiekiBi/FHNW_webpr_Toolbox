
const radius = 10;
const ball = {x:20, y:0, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    const oldBall = ball;

    function ballHitWalls(){
        const maxX = 20;
        const maxY = 20;
        return
    }

    // handle ball is hitting the bounds
    if(ballHitWalls()) {
        //   reverse direction
        //   lose some energy relative to the current inertia (only velocity varies)
        ball.x = oldBall.x + dx;
        ball.y = oldBall.y + dy;
    }

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance


}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}

