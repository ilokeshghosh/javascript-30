// get our elements
const player = document.querySelector('.player');
// console.log(player);
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// build out functions

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // console.log('imposter');

}

function updateButton() {
    // console.log(this);
    const icon = this.paused ? '►' : '❚ ❚';
    // console.log(icon);
    toggle.innerHTML = icon;
    // console.log(toggle.innerHTML);

}

function skip() {
    // console.log(this.dataset.skip);
    // console.log(video.currentTime);
    video.currentTime += parseFloat(this.dataset.skip);

}

function handleRangeUpdate() {
    video[this.name] = this.value;

}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;

}
// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate))
let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);




document.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
        if (document.activeElement !== toggle) {
            if (video.paused) {
                video.play()
            } else {
                video.pause();
            }
        }
    }
})

document.addEventListener('keydown', e => {

    if (e.code === 'ArrowRight') {
        video.currentTime += parseFloat(5);

    } else if (e.code === 'ArrowLeft') {
        video.currentTime += parseFloat(-5);

    }
})