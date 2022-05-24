const newYears= '1 Jan 2023';
var days= document.getElementById("days");
var hours= document.getElementById("hours");
var minutes= document.getElementById("minutes");
var seconds= document.getElementById("seconds");


function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();
    var difference = newYearsDate.getTime()-currentDate.getTime();
    var daysNum = Math.ceil(difference / (1000 * 3600 * 24));
    var hoursNum= Math.floor((Math.abs(newYearsDate - currentDate) / 3.6e6)%24)
    var minutesNum=Math.round(((difference/1000)/60)%60)
    var secondsNum=Math.floor((difference/1000)%60);
     
   days.innerHTML=daysNum
   hours.innerHTML=formatTime(hoursNum)
   minutes.innerHTML=formatTime(minutesNum)
   seconds.innerHTML=formatTime(secondsNum)
}

function formatTime(time){
   if (time<10){
       time="0"+ time
    return time
   }
    else{
        return time
    }
   }
    


countdown()

setInterval(countdown, 1000)