var timerState = false;
const btn = document.getElementById("start-btn");
const timer = document.getElementById("timer-act");
const body = document.body;
const topButtons = document.getElementById("top-button");
var pomo,short,long,stop,canChange,timers;
stop = false;
canChange = true;
min = 25;
sec = 0;

function pomodoro(){
    pomo=true;
    short=false;
    long=false;
    console.log("pomo clicked");
    min = 25;
    sec = 0;
    timer.innerHTML=min+":0"+sec;
    body.style.backgroundColor="#F0D692";
    document.getElementById("total-box").style.backgroundColor="#EDC074";
    document.getElementById("pomo-button").style.backgroundColor="#F0CD71";
    document.getElementById("short-button").style.backgroundColor="#F0D692";
    document.getElementById("long-button").style.backgroundColor="#F0D692";
    return;
}

pomodoro()

function shortBreak(){
    short=true;
    long=false;
    pomo=false;
    min = 10;
    sec = 0;
    timer.innerHTML=min+":0"+sec;
    body.style.backgroundColor = "#BEECED";
    document.getElementById("total-box").style.backgroundColor="#32EAED";
    document.getElementById("pomo-button").style.backgroundColor="#BEECED";
    document.getElementById("short-button").style.backgroundColor="#23D6F0";
    document.getElementById("long-button").style.backgroundColor="#BEECED";
    return;
}

function longBreak(){
    long=true;
    short=false;
    pomo=false;
    min = 15;
    sec = 0;
    timer.innerHTML=min+":0"+sec;
    body.style.backgroundColor = "#C4F092";
    document.getElementById("total-box").style.backgroundColor="#AAF070";
    document.getElementById("pomo-button").style.backgroundColor="#C4F092";
    document.getElementById("short-button").style.backgroundColor="#C4F092";
    document.getElementById("long-button").style.backgroundColor="#94F055";
    return;
}

function start()
{   
    if(btn.textContent === "Start")
    {   
        stop = false;
        if(timerState == true){return;}
        timerState=true;
        timers = setInterval(function(){
            if(stop === true) {
                clearInterval(timers);
                console.log("now the function should stop");
                return;
            }
            if(sec<10){timer.textContent=min+":0"+sec;}
            else{timer.textContent=min+":"+sec;}
            sec--;
            if(min===0 && sec===0)
            {
                clearInterval(timers);
                btn.textContent="Start";
                timerState=false;
                timer.innerHTML="00:00";
                shortBreak();
                return;
            }
            if(sec<0 && min>0)
            {
                min--
                sec=59;
            }
        },1000);
        btn.textContent="Stop";
    }
    else {
        if(!confirm("Are you sure?")){
            return;
        }
        stop = true;
        clearInterval(timers);
        if(pomo === true){
            pomodoro()
            timer.innerHTML="25:00";
        }
        else if(short === true){
            shortBreak()
        }
        else {
            longBreak()
        }
        timerState = false;
        btn.textContent="Start";
    }
}