const inputs = document.querySelectorAll('.controls input');
const button = document.querySelector('#reset-image');
const image = document.querySelector('.image');



function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
    const x = (`--${this.name}`, `${this.value}${suffix}`);
    console.log(x);


}


inputs.forEach(input => input.addEventListener('input', handleUpdate));

const fetchApi = new Promise((resolve, reject) => {
    const url = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=50';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            if (xhr.status === 200) {
                const dataArray=[];
                for(let i=0;i<data.photos.length;i++){
                    dataArray.push(data.photos[i].url)
                }
                resolve(dataArray);
            } else {
                reject('this is error');
            }
        }
    };
    xhr.send();
});

function changeImage() {
    fetchApi.then(value => {
        const min = 0;
        const max = value.length;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return value[randomNumber];
    }).then(image_url => {
        image.setAttribute('src',image_url)
    })
    .catch(error => console.log(error))


}

button.addEventListener('click', (event) => {

    // using fetch api
    // console.log(event.target);
    // const data =  fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=1')
    // .then((response)=> response.json())
    // .then((data)=>console.log(data))
    // .catch((error)=> alert(error,'in fetching data'));

    // using promise
    changeImage();
}, false)