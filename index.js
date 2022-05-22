// Cronometro

const stopWatch = document.getElementById('stopwatch');
const buttonPlayPause = document.getElementById('play-pause');
const secondsSpphere = document.getElementById('seconds-sphere');

let stopWatchIntervals;
let runningTime = 0;

const playPause = () => {
    const isPaused = !buttonPlayPause.classList.contains('running');
    if(isPaused) {
        buttonPlayPause.classList.add('running');
        start();
    } else {
        buttonPlayPause.classList.remove('running');
        pause();
    }
}

const pause = () => {
    secondsSpphere.style.animationPlayState = 'paused';
    clearInterval(stopWatchIntervals);
}

const stop = () => {
    secondsSpphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSpphere.style.animation = 'none';
    buttonPlayPause.classList.remove('running');
    runningTime = 0;
    clearInterval(stopWatchIntervals);
    stopWatch.textContent = '00:00'
}

const start = () => {
    secondsSpphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSpphere.style.animationPlayState = 'running';
    stopWatchIntervals = setInterval(() => {
        runningTime = Date.now() - startTime;
        stopWatch.textContent = calculateTime(runningTime)
    }, 1000)
}

const calculateTime = runningTime => {
    const totalSeconds = Math.floor(runningTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    const displayMinutes = totalMinutes.toString().padStart(2, "0"); 

    return `${displayMinutes}:${displaySeconds}`
}

// Reloj

const tiempo = document.querySelector('.hora');
const fecha = document.querySelector('.fecha');

const Reloj = () => {
    let f = new Date();
    let dia = f.getDate();
    let mes = f.getMonth() + 1;
    let anio = f.getFullYear();
    let nombreDia = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    let timeString = f.toLocaleTimeString();
    tiempo.innerHTML = timeString;

    let semana = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let showSemana = (semana[nombreDia]);
    fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
}

setInterval(() => {
    Reloj()
}, 1000)