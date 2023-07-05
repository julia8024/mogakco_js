function changeText() {
    var h3 = document.getElementsByTagName('h3');
    var texts = ["모가 문제야 세이 썸띵", "각잡고 모각코와 함께", "코딩하면 뭐든 할 수 있어!"];

    document.getElementsByClassName('button')[0].addEventListener('click', function() {
        h3[0].innerHTML = texts[0];
    });

    document.getElementsByClassName('button')[1].addEventListener('click', function() {
        h3[1].innerHTML = texts[1];
    });
    document.getElementsByClassName('button')[2].addEventListener('click', function() {
        h3[2].innerHTML = texts[2];
    });
}