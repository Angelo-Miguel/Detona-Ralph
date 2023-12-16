const state = {
    view: {
        square: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives"),
    },
    values: {
        gameVelocity: 1000,
        hitPosition : 0,
        result:0,
        currentTime: 60,
        liveLeft:3,
    },
    action: {
        countDownTimerId:setInterval(countDown,1000),
        TimerId: setInterval(randomSquare,1000),
    }
}

function playSound(soundName){
    let audio = new Audio(`./assets/sounds/${soundName}.m4a`);
    audio.volume= 0.2;
    audio.play();
}

function countDown() {
    state.values.currentTime--;
    state.view.timeleft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        alert("Game Over! o seu resultado foi: " + state.values.result);
        clearInterval(state.action.countDownTimerId);
       /*  clearInterval(State.action.TimerId); */
        /* reload */
        location.reload();
    }
}

function randomSquare() {
    state.view.square.forEach((square) => {
        square.classList.remove("enemy");
    });
    let randomNunber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.square[randomNunber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerhibox() {
    state.view.square.forEach((square)=> {
        square.addEventListener("mousedown",() =>{
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit")
            }else{
                state.values.liveLeft--;
                state.view.lives.textContent = state.values.liveLeft;
                if (state.values.liveLeft < 0) {
                    state.values.currentTime = 1;
                }
            }
        })    
    })
}

function init() {
    addListenerhibox()
}

init();