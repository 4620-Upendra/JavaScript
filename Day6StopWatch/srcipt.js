let body=document.body
let container=document.createElement("div");
let para1=document.createElement("p")
let para2=document.createElement("p")
let para3=document.createElement("p")
let btn1=document.createElement("button")
let btn2=document.createElement("button")
let btn3=document.createElement("button")


container.setAttribute("class","container1")
para1.setAttribute("class","p1")
para2.setAttribute("class","p2")
para3.setAttribute("class","p3")
btn1.setAttribute("class","startbtn")
btn2.setAttribute("class","pausebtn")
btn3.setAttribute("class","resetbtn")
btn1.setAttribute("onclick","start()")
btn2.setAttribute("onclick","pause()")
btn3.setAttribute("onclick","reset()")

body.prepend(container)
container.appendChild(para1)
container.appendChild(para2)
container.appendChild(para3)

para3.appendChild(btn1)
para3.appendChild(btn2)
para3.appendChild(btn3)

para1.innerText="STOP WATCH"
para2.innerText="00 : 00 : 00"
btn1.innerText="Start"
btn2.innerText="Pause"
btn3.innerText="Reset"

let seconds=0;
let minites=0;
let hours=0;
let timer;
let stopWatchRunning=false;

function start(){
    if(stopWatchRunning){
        return;
    }
    stopWatchRunning=true;
    timer=setInterval(function(){
        seconds++;
        let sec;
        let min;
        let hur;
        
        if(seconds<10){
            sec="0"+seconds
        }else{
            sec=seconds;
        }
        if(seconds==60){
            minites++;
            seconds=0;
        }
        if(minites<10){
            min="0"+minites
        }else{
            min=minites;
        }
        if(minites==60){
            hours++;
            minites=0;
        }
        if(hours<10){
            hur="0"+hours;
        }else{
            hur=hours;
        }
        para2.innerText=`${hur} : ${min} : ${sec}`
    },1000);
}

function pause(){
    clearInterval(timer);
    stopWatchRunning=false;
}
function reset(){
    stopWatchRunning=false;
    clearInterval(timer);
    para2.innerText="00 : 00 : 00"
    seconds=0;
    minites=0;
    hours=0;
}
