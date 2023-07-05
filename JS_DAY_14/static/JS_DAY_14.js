document.getElementById('button').addEventListener('click', function() {

    var text = document.getElementById('textfield').value;
    var chat = document.getElementById('chat_text');

    if (text == "애옹아 귀여운 동작 해줘") {
        chat.innerHTML = "";
        typeWriter("애오옹~~~~❤");
        document.images[0].src = "./static/cat_icon_2.png";
    } else if (text == "애옹아 불 꺼줘") {
        chat.innerHTML = "";
        typeWriter("불 꺼주겠다옹");
        document.getElementById('background').style.backgroundColor = "#868680";
    } else if (text == "애옹아 불 켜줘") {
        chat.innerHTML = "";
        typeWriter("불 켜주겠다옹");
        document.getElementById('background').style.backgroundColor = "#FFFFF3";
    } else if (text == "애옹아 난 빨간색이 좋아") {
        chat.style.color = "#D86A6A";
    } else if (text == "애옹아 난 파란색이 좋아") {
        chat.style.color = "#566270";
    } else if (text == "애옹아 난 검은색이 좋아") {
        chat.style.color = "#000000";
    } else if (text == "애옹아 놀아줄까?") {
        chat.innerHTML = "";
        typeWriter("내가 놀아주는 거지옹");
    } else if (text == "애옹아 사랑해") {
        chat.innerHTML = "";
        typeWriter("나도 사랑한다옹");
    } else {
        chat.innerHTML = "";
        typeWriter("애옹~❤");
    }

    setTimeout(function() {
        chat.innerHTML = "";
        typeWriter("애옹~");
        document.images[0].src = "./static/cat_icon.png";
    }, 2000);
});

var cnt = 0;

function typeWriter(text) {
    var chat = document.getElementById('chat_text');

    if (cnt < text.length) {
        chat.innerHTML += text.charAt(cnt);
        cnt++;
        setTimeout(typeWriter, 100, text);
    } else {
        cnt = 0;
    }
}