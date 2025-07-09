var i=1;
const input = document.getElementById("input-btn"); 
function showTime(){
    const timeNow = new Date().toLocaleString();
    document.getElementById("date").textContent=timeNow;
}

setInterval(showTime,1000);


function createJournalLayout() {
    const container = document.createElement("div");
    container.setAttribute("id","journal-"+i);
    document.getElementById("journal-list").prepend(container);
    const dateContainer = document.createElement("div");
    dateContainer.setAttribute("id","date-jrnl-"+i);
    document.getElementById("journal-"+i).prepend(dateContainer);
    const textContainer = document.createElement("div");
    textContainer.setAttribute("id","act-jrnl-"+i);
    document.getElementById("journal-"+i).prepend(textContainer);
    return;
}


function storeJournal(){
    if(i===1){
        const heading = document.createElement("h3");
        heading.innerHTML="Your Journals";
        document.getElementById("journal-title").appendChild(heading);
    }
    const Datee = new Date();
    var input = document.getElementById("input-btn").value;
    if (input === ""){
        alert("Please type something");
        return;}
    createJournalLayout();
    const h6Container = document.createElement("h6");
    h6Container.textContent=Datee.toLocaleString();
    document.getElementById("date-jrnl-"+i).appendChild(h6Container);
    const pContainer = document.createElement("p");
    pContainer.textContent=input.trim();
    document.getElementById("act-jrnl-"+i).appendChild(pContainer);
    document.getElementById("journal-"+i).style.display="flex";
    document.getElementById("journal-"+i).style.flexDirection="column";
    document.getElementById("journal-"+i).style.height="auto";
    document.getElementById("journal-"+i).style.borderBottom= "1px solid black";
    document.getElementById("input-btn").value="";
    i++;
}

input.addEventListener("keypress",(e)=>{if(e.key ==="Enter"){storeJournal()} } )
