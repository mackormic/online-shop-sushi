console.log('hello form counter js');

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');



btnMinus.addEventListener('click', function () {
        if (parseInt(counter.innerHTML) > 1) {
        counter.innerText = --counter.innerHTML;
    }      
});

btnPlus.addEventListener('click', function () {
       counter.innerText = ++counter.innerHTML;
    
});