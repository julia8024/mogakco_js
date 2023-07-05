document.getElementById('button').addEventListener('click', function() {
    var text = document.getElementById('textfield').value;
    
    if (text == "#image_change") {
        console.log("챗봇 이미지 변경");
    } else if (text == "#color_red") {
        console.log("채팅 색상 빨간색으로 변경");
    } else if (text == "#color_blue") {
        console.log("채팅 색상 파란색으로 변경");
    } else if (text == "#color_black") {
        console.log("채팅 색상 검정색으로 변경");
    } else {
        console.log("채팅창 텍스트를 입력받은 값으로 변경");
        document.getElementById('chat_text').innerHTML = text;
    }
});