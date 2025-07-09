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


window.addEventListener("DOMContentLoaded", () => {
  const start = localStorage.getItem("pomoStartTime");
  const duration = localStorage.getItem("pomoDuration");

  if (start && duration) {
    const elapsed = Math.floor((Date.now() - parseInt(start)) / 1000);
    const remaining = parseInt(duration) - elapsed;

    if (remaining > 0) {
      runCountdown(remaining);
    } else {
      localStorage.removeItem("pomoStartTime");
      localStorage.removeItem("pomoDuration");
    }
  }
});


function pomodoro(){
    if(timerState == true){return;}
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

function shortBreak(){
    if(timerState == true){return;}
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
    if(timerState == true){return;}
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
        let duration;
        if(long === true && short===false && pomo===false){
            duration = 15*60;
        }
        else if(long === false && short===false && pomo===true){
            duration = 25*60;
        }
        else{
            duration = 10*60;
        }
        const startTime = Date.now();

        localStorage.setItem("pomoStartTime",startTime);
        localStorage.setItem("pomoDuration",duration);

        timers = setInterval(function(){
            if(stop === true) {
                clearInterval(timers);
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
                alert("Congratulations, you can now take a short break");
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

        localStorage.removeItem("pomoStartTime");
        localStorage.removeItem("pomoDuration");

        timerState = false;
        btn.textContent="Start";

        if(pomo === true){
            pomodoro();
            timer.innerHTML="25:00";
        }
        else if(short === true){
            shortBreak();
        }
        else {
            longBreak();
        }
    }
}

function runCountdown(remaining) {
    min = Math.floor(remaining / 60);
    sec = remaining % 60;

    timer.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

    timers = setInterval(() => {
        if (stop === true) {
            clearInterval(timers);
            return;
        }

        if (sec < 10) {
            timer.textContent = `${min}:0${sec}`;
        } else {
            timer.textContent = `${min}:${sec}`;
        }

        sec--;
        if (min === 0 && sec === 0) {
            clearInterval(timers);
            timerState = false;
            timer.textContent = "00:00";
            btn.textContent = "Start";
            localStorage.removeItem("pomoStartTime");
            localStorage.removeItem("pomoDuration");
            alert("DONE");
            shortBreak();
            return;
        }

        if (sec < 0 && min > 0) {
            min--;
            sec = 59;
        }
    }, 1000);
    timerState = true;
    btn.textContent = "Stop";
}
