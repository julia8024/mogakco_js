// 숫자
var num = 1;
// 문자열
var str = "모각코 최고";
// boolean
var true_val = true;
var false_val = false;
// 객체 (object)
var Identity = { name: "세희", age: 21 };
// undefined
var undefined;
// null
var none_value = null;

function printType(type) {
    if (type == "num") {
        console.log(typeof num);
        document.getElementById('text_box').innerHTML = num;
    } else if (type == "str") {
        console.log(typeof str);
        document.getElementById('text_box').innerHTML = str;
    } else if (type == "true_val") {
        console.log(typeof true_val);
        document.getElementById('text_box').innerHTML = true_val;
    } else if (type == "false_val") {
        console.log(typeof false_val);
        document.getElementById('text_box').innerHTML = false_val;
    } else if (type == "Identity") {
        console.log(typeof Identity);
        document.getElementById('text_box').innerHTML = "이름 : " + Identity.name + "\n나이 : " + Identity.age;
    } else if (type == "undefined") {
        console.log(typeof undefined);
        document.getElementById('text_box').innerHTML = undefined;
    } else if (type == "none_value") {
        console.log(typeof none_value);
        document.getElementById('text_box').innerHTML = none_value;
    }
}