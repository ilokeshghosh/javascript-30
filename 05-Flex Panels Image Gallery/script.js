const panels = document.querySelectorAll('.panel')
// console.log(panels)

function addOpen(){

    panels.forEach((e)=>{
        
        if(e.classList.contains('open')){
            // console.log(e);
            // console.log('hi');
            e.classList.remove('open');
            
            // console.log(this);
        }
        this.classList.add('open');
    })
    // console.log(this);
}

function addActive(e){

    if(e.propertyName.includes('flex')){
        e.target.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', addOpen))




panels.forEach(panel => panel.addEventListener('transitionend', addActive))