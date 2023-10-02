
// console.log(key);

function playSound(e){
    const audio = this.document.querySelector(`audio[data-key='${e.keyCode}'`)
    const key = this.document.querySelector(`div[data-key='${e.keyCode}'`)
    // console.log(audio);

    if(!audio) return; //this will stop the function form running all together
    audio.currentTime =0;
    audio.play();
    // console.log(key);
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
    console.log(this);
}

const key = document.querySelector('.btn');
window.addEventListener('keydown', playSound,false);
const keys = document.querySelectorAll('.key');
keys.forEach(keys =>keys.addEventListener('transitionend',removeTransition));