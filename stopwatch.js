let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let hour = 00;
let min = 00;
let sec = 00;
let msec = 00;

startbtn.addEventListener("click",function() {
    // alert("Start");
    time = true;
    stopwatch();
    setInterval(stopwatch, 10);
})
stopbtn.addEventListener("click",function() {
    // alert("stop");
    time = false;
})
resetbtn.addEventListener("click",function() {
    // alert("reset");
    time = false;
    hour=0;
    min=0;
    sec=0;
    msec=0;
    document.getElementById("hour").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("msec").innerHTML="00";
})
function stopwatch() {
    if (time) {
        msec++;
        if (msec==100) {
            sec++;
            msec=0;
        }
        if (sec==60) {
            min++;
            sec=0;
        }
        if (min==60) {
            hour++;
            min=0
            sec=0;
        }

        let shour = hour;
        let smin = min;
        let ssec = sec;
        let smsec = sec;

        shour = hour<10 ? "0"+shour : hour;
        smin = min<10 ? "0"+smin : min;
        ssec = sec<10 ? "0"+ssec : sec;
        smsec = msec<10 ? "0"+ smsec : msec;

        document.getElementById("hour").innerHTML=shour;
        document.getElementById("min").innerHTML=smin;
        document.getElementById("sec").innerHTML=ssec;
        document.getElementById("msec").innerHTML=smsec;
        // setTimeout(stopwatch,10);
    }
}