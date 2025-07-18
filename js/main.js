let timerDisplay = document.querySelector(".timerDisplay");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let timerId = null;
let msec = 0;
let secs = 0;
let mins = 0;
let hmin = 0;
let day = 0;
startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10)
});
stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
});
resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = "00 : 00 : 00 : 00 : 00";
    mins = secs = msec = hmin = day = 0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;

        if (secs == 60) {
            secs = 0;
            mins++;
        }
        if (mins == 60) {
            mins = 0;
            hmin++;
        } if (hmin == 24) {
            hmin = 0;
            day++
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hminString = hmin < 10 ? `0${hmin}` : hmin;
    let dayString = day < 10 ? `0${day}` : day;


    timerDisplay.innerHTML = `${dayString}  : ${hminString} : ${minsString} : ${secsString} : ${msecString} `;

}

// Chat gpt
// let timerDisplay = document.querySelector(".timerDisplay");
// let stopBtn = document.getElementById("stopBtn");
// let startBtn = document.getElementById("startBtn");
// let resetBtn = document.getElementById("resetBtn");

// let timerId = null;
// let msec = 0;
// let secs = 0;
// let mins = 0;

// startBtn.addEventListener('click', function () {
//     if (timerId !== null) {
//         clearInterval(timerId); // Corrected
//     }
//     timerId = setInterval(startTimer, 10);
// });

// stopBtn.addEventListener('click', function () {
//     clearInterval(timerId); // Corrected
// });

// resetBtn.addEventListener('click', function () {
//     clearInterval(timerId); // Corrected
//     timerDisplay.innerHTML = "00 : 00 : 00";
//     mins = secs = msec = 0;
// });

// function startTimer() {
//     msec++;
//     if (msec == 100) {
//         msec = 0;
//         secs++;
//     }
//     if (secs == 60) {
//         secs = 0;
//         mins++;
//     }

//     let msecString = msec < 10 ? `0${msec}` : msec;
//     let secsString = secs < 10 ? `0${secs}` : secs;
//     let minsString = mins < 10 ? `0${mins}` : mins;

//     timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
// }


// let msecString
// if (msec < 10) {
//     msecString = '0${msec}';

// } else {
//     msecString = msec;
// }