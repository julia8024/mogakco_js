function calculateNum(char) {
    var num1 = parseInt(document.getElementById('num_1').value);
    var num2 = parseInt(document.getElementById('num_2').value);
    var result = 0;

    switch(char) {
        case 'plus':
            result = num1 + num2;
            console.log(num1 + " + " + num2 + " = " + result);
            document.getElementById('text_box').innerHTML = num1 + " + " + num2 + " = " + result;
            break;
        case 'min':
            result = num1 - num2;
            console.log(num1 + " - " + num2 + " = " + result);
            document.getElementById('text_box').innerHTML = num1 + " - " + num2 + " = " + result;
            break;
        case 'mul':
            result = num1 * num2;
            console.log(num1 + " * " + num2 + " = " + result);
            document.getElementById('text_box').innerHTML = num1 + " * " + num2 + " = " + result;
            break;
        case 'div':
            if (num2 == 0) {
                console.log("두 번째 값이 0이 될 수 없습니다");
                document.getElementById('text_box').innerHTML = "두 번째 값을 다시 입력하세요.";
            }
            else {
                result = num1 / num2;
                console.log(num1 + " / " + num2 + " = " + result);
                document.getElementById('text_box').innerHTML = num1 + " / " + num2 + " = " + result;
            }
            break;
    }

}