let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let containerDom = document.querySelector('.container');
let SliderDom = containerDom.querySelector('.container .list');
let thumbnailBorderDom = document.querySelector('.container .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.container .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}

let timeRunning = 2000;
let runTimeOut;

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.container .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.container .thumbnail .item');

    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        containerDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        containerDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        containerDom.classList.remove('next');
        containerDom.classList.remove('prev');
    }, timeRunning);
}