let countDate = new Date("Aug 26, 2022 15:25:25").getTime();

let everySec = setInterval(function(){
    let todayDate = new Date().getTime();
    let distance=countDate-todayDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("daysAmount").innerHTML=days;
    document.getElementById("hoursAmount").innerHTML=hours;
    document.getElementById("minutesAmount").innerHTML=minutes;
    document.getElementById("secondsAmount").innerHTML=seconds;
}, 1000)