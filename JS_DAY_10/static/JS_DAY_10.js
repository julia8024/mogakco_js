document.getElementById('button').addEventListener('click', function() {
    document.getElementById('state').innerHTML = "calling...";
    setTimeout(function() {
        timer();
        document.getElementById('title').innerHTML = "세희";
        document.getElementById('button').style.backgroundColor = "#eb9f9f";
    }, 2000);
});

function timer() {
    var h = 0;
    var m = 0;
    var s = 0;
    var time = 0;
    timer = setInterval(function() {
        time++;
        s = time % 60;
        m = Math.floor(time / 60);
        h = Math.floor((time % 60)/ 60);
        document.getElementById('state').innerHTML = `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
    }, 1000);
}