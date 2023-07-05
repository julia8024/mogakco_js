var cnt = 0;
var str = [ '세', '희'];

function addText() {
    var button = document.getElementById('button');

    var name = "";
    cnt++;
    if (cnt >= 3) {
        cnt = 0;
    }
    for (i = 0; i < cnt; i++) {
        name = name + str[i];
    }

    document.getElementById('title').innerHTML = name;
}