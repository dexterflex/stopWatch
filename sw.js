// Timer selectors
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');

// Marked time section
let markedTime = document.querySelector(".marked-time");

// Button selectors
let resetBtn = document.getElementById('reset');
let startBtn = document.getElementById('start');
let markBtn = document.getElementById('mark');

// Variables
let id;
let isRunning = false;

// Start button event
startBtn.addEventListener('click', () => {
    if (isRunning) {
        startBtn.textContent = 'Start';
        clearInterval(id);
        isRunning = false;
        markBtn.disabled = true;
    } else {
        if (id === undefined) {
            updateWatch();
        }
        id = setInterval(updateWatch, 1000);
        startBtn.textContent = 'Stop';
        isRunning = true;
        markBtn.disabled = false;
    }
});

// Function to update the timer
function updateWatch() {
    sec.innerHTML++;
    sec.innerHTML = String(sec.innerHTML).padStart(2, '0');
    if (sec.innerHTML >= 59) {
        sec.innerHTML = 00;
        min.innerHTML++;
        min.innerHTML = String(min.innerHTML).padStart(2, '0');
    }
}

// Mark button event
markBtn.addEventListener('click', () => {
    // adding the marked time 
    let div = document.createElement('div');
    div.textContent = `${min.textContent}:${sec.textContent}`;
    markedTime.appendChild(div);
    div.style.padding="2px 10px"
    // dbl click to delete marked time 
    div.addEventListener('dblclick', () => {
        div.remove()
    })
});

// Reset button event
resetBtn.addEventListener('click', () => {
    markBtn.disabled = true;
    startBtn.disabled = false;
    // reseting the timer 
    min.textContent = "00";
    sec.textContent = "00";
    markedTime.textContent = "";
    // clearing intervals and setting to undefined 
    clearInterval(id);
    id = undefined;
});
