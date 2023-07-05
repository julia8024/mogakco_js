function Movie(name, date, genre) {
    this.name = name;
    this.date = date;
    this.genre = genre;
}

function printImfo(value) {

    if (value == 0) {
        var movie = new Movie("해리포터 (시리즈)", "2001 ~ 2011", "판타지");
    } else if (value == 1) {
        var movie = new Movie("하울의 움직이는 성", "2004", "판타지/애니메이션");
    } else if (value == 2) {
        var movie = new Movie("인셉션", "2010", "SF/액션/스릴러");   
    }

    document.getElementById('title').innerHTML = movie.name;
    document.getElementsByClassName('text_box')[0].innerHTML = movie.date;
    document.getElementsByClassName('text_box')[1].innerHTML = movie.genre;
}