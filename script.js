let timer;
let isRunning = false;
let milliseconds = 0;
let laps = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerHTML = 'Start';
    } else {
        timer = setInterval(updateDisplay, 10); // Update every 10 milliseconds
        document.getElementById('startStop').innerHTML = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    laps = [];
    updateDisplay();
    document.getElementById('startStop').innerHTML = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    laps.push(formatTime(milliseconds));
    updateLaps();
}

function updateDisplay() {
    document.getElementById('display').innerHTML = formatTime(milliseconds);
    milliseconds += 10;
}

function updateLaps() {
    const lapsContainer = document.getElementById('laps');
    lapsContainer.innerHTML = '';
    laps.forEach((lap, index) => {
        const li = document.createElement('li');
        li.innerHTML = `Lap ${index + 1}: ${lap}`;
        lapsContainer.appendChild(li);
    });
}

function formatTime(time) {
    const minutes = Math.floor(time / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    const milliseconds = time % 1000;

    return `${formatNumber(minutes)}:${formatNumber(seconds)}:${formatNumberWithTwoDigits(milliseconds)}`;
}

function formatNumber(number) {
    return (number < 10) ? `0${number}` : number;
}

function formatNumberWithTwoDigits(number) {
    return (number < 10) ? `00${number}` : (number < 100) ? `0${number}` : number;
}

// Set initial display to "00:00:00"
updateDisplay();
