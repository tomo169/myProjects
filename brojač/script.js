const daniEl = document.getElementById("dani");
const satiEl = document.getElementById("sati");
const minuteEl = document.getElementById("minute");
const sekundeEl = document.getElementById("sekunde");

const novaGodina = "1 Jan 2021";

function brojac() {
    const datNoveGod = new Date(novaGodina);
    const trenutacniDat = new Date();

    const ukSek = (datNoveGod - trenutacniDat) / 1000;

    const dani = Math.floor(ukSek / 3600 / 24);
    const sati = Math.floor(ukSek /3600 ) % 24;
    const minute= Math.floor(ukSek /60) % 60;
    const sekunde= Math.floor(ukSek) % 60;

    daniEl.innerHTML = dani;
    satiEl.innerHTML = formatTime(sati);
    minuteEl.innerHTML = formatTime(minute);
    sekundeEl.innerHTML = formatTime(sekunde);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

brojac();

setInterval(brojac, 1000);