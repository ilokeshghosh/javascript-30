const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(localMediaStream =>{
        // console.log(localMediaStream);
        video.srcObject =localMediaStream;
        video.play();
    })
    .catch(Error => console.log('this is error for',Error))
}


function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    // console.log(width, height);
    canvas.height = height;
    canvas.width = width;

    return setInterval(()=>{
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height)

        // pixels = redEffect(pixels);

        // pixels = rgbSplit(pixels);
        // ctx.globalAlpha =0.1;
        
        pixels = greenScreen(pixels)
        ctx.putImageData(pixels, 0, 0);
        // console.log(pixels);
        // debugger;
    },16)
}

function takePhoto(){
    //play sound
    snap.currentTime =0;
    snap.play();

    // take the data out of canvas
    // console.log(canvas);
    const data = canvas.toDataURL('image/jpeg')
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'lokesh');
    link.innerHTML =`<img src=${data} />`
    // console.log(data);
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels){
    for(let i=0;i<pixels.data.length; i+=4){
        // pixels.data[i] //red
        // pixels.data[i+1] //green
        // pixels.data[i+2] //blue

        pixels.data[i+0] = pixels.data[i+0] - 100 //red
        pixels.data[i+1] = pixels.data[i+1] - 50 //green
        pixels.data[i+2] = pixels.data[i+2] * 0.5 //blue
    }
    return pixels;
}

function rgbSplit(pixels){
    for(let i=0;i<pixels.data.length; i+=4){
        pixels.data[i-150] = pixels.data[i+0]//red
        pixels.data[i+100] = pixels.data[i+1]//green
        pixels.data[i-100] = pixels.data[i+2] //blue
    }
    return pixels;
}

function greenScreen(pixels){
    const levels ={};

    document.querySelectorAll('.rgb input').forEach((input)=>{
        levels[input.name] = input.value;
    })

    for(let i=0;i<pixels.data.length;i=i+4){
        red = pixels.data[i+0];
        green = pixels.data[i+1];
        blue = pixels.data[i+2];
        alpha = pixels.data[i+3];

        if(red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <=levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax){
                pixels.data[i+3] =0;
            }
    }
    return pixels
}
getVideo();

video.addEventListener('canplay',paintToCanvas);