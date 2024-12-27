const parallax = document.querySelector('.parallax');
const elementOne = document.querySelector('.element-1');
const elementTwo = document.querySelector('.element-2');
const elementThree = document.querySelector('.element-3');
const circle = document.querySelector('.circle')

window.addEventListener('scroll', () => {

    let { scrollY } = window;

    //Direction of parallax is controlled by position element 
    elementOne.style.top = elementOne.dataset.rate * scrollY + 'px'; 
    elementTwo.style.left = elementOne.dataset.rate * scrollY + 'px';
    elementThree.style.bottom = elementOne.dataset.rate * scrollY + 'px';
    circle.style.left = circle.dataset.rate * scrollY + 'px';

   
});