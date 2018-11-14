function digitalClock(){
    let date = new Date();
    let seconds = date.getSeconds() + '';
    let minutes = date.getMinutes() + '';
    let hour = date.getHours() + '';
    let day = date.getDay() + '';

    if(hour.length < 2){
        hour = '0' + hour;
    }
    if(minutes.length < 2){
        minutes = '0' + minutes;
    }
    if(seconds.length < 2){
        seconds = '0' + minutes;
    }
    let weekDays = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    const clock = weekDays[day] + ' ' + hour + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

}
setInterval(digitalClock, 1000);