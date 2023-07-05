var json =
[
    { "question" : "애옹아 귀여운 동작 해줘", "answer" : "애오옹~~~❤" },
    { "question" : "애옹아 불 꺼줘", "answer" : "불 꺼주겠다옹" },
    { "question" : "애옹아 불 켜줘", "answer" : "불 켜주겠다옹" },
    { "question" : "애옹아 놀아줄까?", "answer" : "내가 놀아주는 거지옹" },
    { "question" : "애옹아 사랑해", "answer" : "나도 사랑한다옹❤" }
]

var question = "";
var answer = "";
var key = 0;

document.getElementById('button').addEventListener('click', function() {

    var text = document.getElementById('textfield').value;
    var chat = document.getElementById('chat_text');
    var colors = ["#868680", "#FFFFF3"];


    if (key == 1) {
        if (text == "네") {
            chat.innerHTML = "";
            typeWriter("대답을 입력해주세요!");
            key = 2;
        } else {
            chat.innerHTML = "";
            typeWriter("애옹~");
            key = 0;
        }
        return;
    }
    if (key == 2) {
        answer = text;
        chat.innerHTML = "";
        push_json();
        key = 0;
        return;
    }

    for (i = 0; i < json.length; i++) {
        if (text == json[i].question) {
            chat.innerHTML = "";
            typeWriter(json[i].answer);

            if (i == 0) {
                document.images[0].src = "./static/cat_icon_2.png";
            } else if (i == 1 || i == 2) {
                document.getElementById('background').style.backgroundColor = colors[i-1];
            }

            setTimeout(function() {
                chat.innerHTML = "";
                typeWriter("애옹~");
                document.images[0].src = "./static/cat_icon.png";
            }, 2000);

            return;
        }
    }

    chat.innerHTML = "";
    typeWriter("말을 가르쳐주세옹(네 or 아니요)");
    question = text;
    key = 1;
});

function push_json() {
    json.push({question : `${question}`, answer : `${answer}`});
    typeWriter("말을 배웠다옹~!");
}

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