let counter = 0;
const counterEl = document.querySelector('#counter');
let timerId;


const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnreset = document.querySelector('#reset');


btnStart.addEventListener('click', function () {
    timerId = setInterval(function () {
        counter++;
        counterEl.innerText = counter
    }, 1000);
    console.log('timerId', timerId)
});

btnStop.addEventListener('click', function () {
    clearInterval(timerId)
})

btnreset.addEventListener('click', function () {
    console.log('reset')
    counter = 0;
    counterEl.innerText = counter

});