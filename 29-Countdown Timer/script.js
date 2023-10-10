let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds){
    //clear any existing timers
    clearInterval(countdown)
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        //check if we should stop it !
        if(secondsLeft <= 0){
            clearInterval(countdown)
            return;
        }

        // display it
        displayTimeLeft(secondsLeft)
    }, 1000);
}


function displayTimeLeft(seconds){
    let minutes = Math.floor(seconds / 60);
    seconds%=60;
    const hours = Math.floor(minutes / 60);
    minutes%=60;
    let timeLeft ;
    
        if(hours===0){
            timeLeft = `${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
        }else{

            timeLeft = `${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
        }
        document.title = timeLeft
    timerDisplay.textContent = timeLeft
}


function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const seconds = end.getSeconds();
    let hour12 = (hour > 12? hour-12 : hour);
    endTime.textContent = `Be Back At ${hour12 < 10 ? '0': ''}${hour12} : ${minutes < 10 ? '0' : ''}${minutes} ${hour>=12 ? 'PM' : 'AM'}`;
}

function startTimer(e){
    const seconds = parseInt(this.dataset.time);
    timer(seconds)

}
buttons.forEach(button=> button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const minutes = this.minutes.value;
    const seconds = minutes * 60;
    timer(seconds)
    this.reset();
})

