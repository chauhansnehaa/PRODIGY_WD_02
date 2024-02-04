let startTime, updatedTime, difference, tInterval, savedTime;
    let running = false;
    const display = document.getElementById('display');
    const lapTimes = document.getElementById('lapTimes');
    const stopwatchContainer = document.getElementById('stopwatchContainer');

    function startTimer(){
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        savedTime = 0;
        running = true;
    }

    function pauseTimer(){
        clearInterval(tInterval);
        savedTime = difference;
        running = false;
    }

    function resetTimer(){
        clearInterval(tInterval);
        savedTime = 0;
        difference = 0;
        running = false;
        display.innerText = '00:00:00';
        lapTimes.innerHTML = '';
    }

    function recordLap(){
        let lapTime = display.innerText;
        let p = document.createElement('p');
        p.innerText = lapTime;
        lapTimes.appendChild(p);
    }

    function getShowTime(){
        updatedTime = new Date().getTime();
        if (savedTime){
            difference = (updatedTime - startTime) + savedTime;
        } else {
            difference =  updatedTime - startTime;
        }
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((difference % (1000 * 60)) / 10);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
        display.innerText = hours + ':' + minutes + ':' + seconds;
    }

    function flipContainer() {
        stopwatchContainer.classList.toggle('flipped');
    }

    function startStopwatch() {
        if(!running){
            startTimer();
            flipContainer();
        }
    }

    function pauseStopwatch() {
        if(running){
            pauseTimer();
            flipContainer();
        }
    }

    function resetStopwatch() {
        resetTimer();
        flipContainer();
    }

    function recordLapTime() {
        if(running){
            recordLap();
            flipContainer();
        }
    }