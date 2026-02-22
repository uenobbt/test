let totalSeconds = 0;
let remainingSeconds = 0;
let timerInterval = null;
let isRunning = false;

function pad(n) {
    return String(n).padStart(2, '0');
}

function updateDisplay(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    document.getElementById('display').textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function startTimer() {
    if (isRunning) return;

    if (remainingSeconds === 0) {
        const h = parseInt(document.getElementById('hours').value) || 0;
        const m = parseInt(document.getElementById('minutes').value) || 0;
        const s = parseInt(document.getElementById('seconds').value) || 0;
        totalSeconds = h * 3600 + m * 60 + s;
        remainingSeconds = totalSeconds;
    }

    if (remainingSeconds <= 0) {
        document.getElementById('message').textContent = '時間を設定してください';
        return;
    }

    document.getElementById('message').textContent = '';
    document.getElementById('display').classList.remove('finished');
    setInputsDisabled(true);

    isRunning = true;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;

    timerInterval = setInterval(() => {
        remainingSeconds--;
        updateDisplay(remainingSeconds);

        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            isRunning = false;
            document.getElementById('display').classList.add('finished');
            document.getElementById('message').textContent = '時間になりました！';
            document.getElementById('startBtn').disabled = false;
            document.getElementById('pauseBtn').disabled = true;
            setInputsDisabled(false);
        }
    }, 1000);
}

function pauseTimer() {
    if (!isRunning) return;

    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;

    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    remainingSeconds = 0;

    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 0;
    document.getElementById('seconds').value = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('display').classList.remove('finished');
    document.getElementById('message').textContent = '';
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    setInputsDisabled(false);
}

function setInputsDisabled(disabled) {
    document.getElementById('hours').disabled = disabled;
    document.getElementById('minutes').disabled = disabled;
    document.getElementById('seconds').disabled = disabled;
}
