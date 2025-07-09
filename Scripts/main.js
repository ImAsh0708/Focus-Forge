const texts = ["FOCUS FORGE","STAY FOCUSED","BE MOTIVATED","FORGE YOURSELF","GRIND RELENTLESSLY","FORGE AHEAD","RISE STRONG","OWN IT","HUSTLE HARD","KEEP PUSHING","NEVER SETTLE","CHOOSE COURAGE","CRUSH LIMITS","EMBRACE PAIN","JUST START","FOCUS FORWARD","BE UNSTOPPABLE","STAY SHARP","WIN DAILY","STAY DISCIPLINED","THINK BIG","BELIEVE DEEP","ACT FEARLESS","BREATHE FIRE"
];

function display(){
    const container = document.getElementById("focus-text");
    container.innerHTML=texts[0];
    let i = 0;
    let textt = texts[i];
    const storage = setInterval(function (){  
        textt = textt.slice(0,1-textt.length);
        console.log(textt);
        container.innerText=textt;
        if(textt.length===1){
            i++;
            if(i===texts.length){
                i=0;
            }
            container.innerHTML=texts[i];
            textt = texts[i];
        }
    },3000)
}

display();

function journalRedir(){
    window.location.href="../Elements/journal.html";
    return;
}


function pomoRedir(){
    window.location.href="../Elements/pomodoro.html";
    return;
}

function toDoRedir(){
    window.location.href="../Elements/todolist.html";
    return;
}