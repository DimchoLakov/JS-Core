function timer() {
    let $timer;
    let isTimerRunning = false;

    let totalSeconds = 0;

    let $startTimerBtn = $('#start-timer');
    let $stopTimerBtn = $('#stop-timer');
    let $resetTimerBtn = $('#reset-timer');

    $startTimerBtn.on('click', start);

    $stopTimerBtn.on('click', stop);

    $resetTimerBtn.on('click', reset);

    function step() {
        totalSeconds += 1;
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours = Math.floor(totalSeconds / 60 / 60);

        let secondToString = seconds.toString();
        let minutesToString = minutes.toString();
        let hoursToString = hours.toString();

        if (secondToString.length === 1) {
            secondToString = `0${secondToString}`;
        }
        if (minutesToString.length === 1) {
            minutesToString = `0${minutesToString}`;
        }
        if (hoursToString.length === 1) {
            hoursToString = `0${hoursToString}`;
        }

        $('#seconds').text(secondToString);
        $('#minutes').text(minutesToString);
        $('#hours').text(hoursToString);
    }

    function start() {
        if (isTimerRunning === false) {
            $startTimerBtn.text('Pause');
            $timer = setInterval(step, 1000);
            isTimerRunning = true;
        } else {
            clearInterval($timer);
            $startTimerBtn.text('Start');
            isTimerRunning = false;
        }
    }

    function reset() {
        totalSeconds = 0;
        $('#seconds').text('00');
        $('#minutes').text('00');
        $('#hours').text('00');
    }

    function stop() {
        reset();
        clearInterval($timer);
        $startTimerBtn.text('Start');
        isTimerRunning = false;
    }
}