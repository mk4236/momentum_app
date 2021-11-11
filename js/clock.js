const clock = document.querySelector("#clock");

setInterval(setClock, 1000);

function setClock() {
    const today = new Date();
    const HH = setDigit(today.getHours());
    const Mi = setDigit(today.getMinutes());
    const ss = setDigit(today.getSeconds());

    clock.innerText = `${HH}:${Mi}:${ss}`;
}

function setDigit(num) {
    let res;

    if (num < 10) {
        res = "0" + num;
    } else {
        res = num;
    }

    return res;
}