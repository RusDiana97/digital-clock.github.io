// hour, minutes, seconds, time of the day: am or pm

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("am-pm");

function Clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12; // e.g. h = 13 because is PM, ampm will be PM from AM
        ampm = "PM";
    }

    // 9:0:0 PM will be 09:00:00

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText = ampm;

    //update time every 1000 ms (miliseconds)

    setTimeout(() => { Clock() }, 1000);
};

Clock();