const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
function setDate() {
    const now = new Date();

    // second
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // const secondsDegrees = ((seconds / 60) * 360) + 90;
    // console.log(secondsDegrees);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    // minute
    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;




    // hours
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    // const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    // console.log(hourDegree)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;







}

setInterval(setDate, 1000)
setDate();