const leftMove = document.getElementById('left');
const rightMove = document.getElementById('right');

const sliderParent = document.getElementById('sliderImgs');
const slider = document.querySelectorAll('.slider');


let imgArray = [
    './assets/image-slide-1.jpg',
    './assets/image-slide-2.jpg', 
    './assets/image-slide-3.jpg',
    './assets/image-slide-4.jpg',
    './assets/image-slide-5.jpg'
];


let slide = 1;

rightMove.addEventListener('click', ()=> {
   
    let lastImg = slider[0].src;
    slider[0].src = slider[1].src;
    slider[1].src = slider[2].src;
    slider[2].src = slider[3].src;
    slider[3].src = slider[4].src;
    slider[4].src = lastImg;
})
    
leftMove.addEventListener('click', ()=> {
    
    let lastImg = slider[4].src;
    slider[4].src = slider[3].src;
    slider[3].src = slider[2].src;
    slider[2].src = slider[1].src;
    slider[1].src = slider[0].src;
    slider[0].src = lastImg;
})

