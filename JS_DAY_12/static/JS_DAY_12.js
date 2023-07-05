document.getElementById('button').addEventListener('click', function() {
    var text = document.getElementById('textfield').value;
    var chat = document.getElementById('chat_text');

    if (text == "애옹아 귀여운 동작 해줘") {
        console.log("챗봇 이미지 변경");
        chat.innerHTML = "애오옹~~~~❤";
        document.images[0].src = "./static/cat_icon_2.png";
        setTimeout(function() {
            chat.innerHTML = "애옹~";
            document.images[0].src = "./static/cat_icon.png";
        }, 2000);
    } else if (text == "불 꺼줘") {
        console.log("화면 어둡게");
        chat.innerHTML = "불 꺼주겠다옹";
        document.getElementById('background').style.backgroundColor = "#868680";
    } else if (text == "불 켜줘") {
        console.log("화면 밝게");
        chat.innerHTML = "불 켜주겠다옹";
        document.getElementById('background').style.backgroundColor = "#FFFFF3";
    } else if (text == "#color_red") {
        console.log("채팅 색상 빨간색으로 변경");
        chat.style.color = "#D86A6A";
    } else if (text == "#color_blue") {
        console.log("채팅 색상 파란색으로 변경");
        chat.style.color = "#566270";
    } else if (text == "#color_black") {
        console.log("채팅 색상 검정색으로 변경");
        chat.style.color = "#000000";
    } else {
        console.log("채팅창 텍스트를 입력받은 값으로 변경");
        chat.innerHTML = text;
    }
});