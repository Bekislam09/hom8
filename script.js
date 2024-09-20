let timer;
let seconds = 0;
let running = false;

function formatTime(sec) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const remainingSeconds = sec % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')};`
}

function updateTimer() {
    document.getElementById('timer').textContent = formatTime(seconds);
}

document.getElementById('start-btn').addEventListener('click', () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    if (running) {
        running = false;
        clearInterval(timer);
    }
});

document.getElementById('reset-btn').addEventListener('click', () => {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateTimer();
});

updateTimer();