var SECONDS = 10;

var tm = 0;
var ts = 0;
var tcs = 0;
var tm_str;
var ts_str;
var tcs_str;

function stopWatch(char) {
    if (char == 'start') {
        timer = setInterval(function() {
            // 센티초
            tcs++;
            if (tcs < 10) {
                tcs_str = '0' + tcs;
            } else if (tcs >= 100) {
                tcs = 0;
                tcs_str = "00";
                ts++;
            } else {
                tcs_str = tcs;
            }

            // 초
            if (ts < 10) {
                ts_str = '0' + ts;
            } else if (ts >= 60) {
                ts = 0;
                ts_str = "00";
                tm++;
            } else {
                ts_str = ts;
            }

            // 분
            // 한시간이 지나면 리셋
            if (tm < 10) {
                tm_str = '0' + tm;
            } else if (tm >= 60) {
                tm = 0;
                tm_str = "00";
            } else {
                tm_str = tm;
            }

            document.getElementById('time').innerHTML = tm_str + ':' + ts_str + ':' + tcs_str;
        }, SECONDS);
    } else if (char == 'stop') {
        clearInterval(timer);
    } else if (char == 'reset') {
        clearInterval(timer);
        tm = ts = tcs = 0;
        document.getElementById('time').innerHTML = "00:00:00";
    }
}