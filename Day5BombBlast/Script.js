let body=document.body;  //getting body

let maindiv=document.createElement("div")   //creating element
body.prepend(maindiv)  //prepend div in body
maindiv.setAttribute("class","maincointainer")   //set attridute class to maindiv
// console.log(maindiv.getAttribute("class"));    // getting class attribute of maindive
let subdiv=document.createElement("div")
maindiv.appendChild(subdiv)
subdiv.setAttribute("class","subcontainer")

subdiv.insertAdjacentHTML("afterbegin","<h2 id='heading'>💣 Bomb Blast </h2>")
let bomb=document.createElement("div")
bomb.setAttribute("class","bomb")
let blast=document.createElement("img")
blast.setAttribute("class","blastimg")
blast.setAttribute("id","blastimgid")
bomb.append(blast)
blast.setAttribute("src","https://tse4.mm.bing.net/th/id/OIP.SjQYyS9TWTe-kTrMISoxRAHaFk?pid=Api&P=0&h=180")
let bombimg=document.createElement("img")
bombimg.setAttribute("src","https://img.icons8.com/emoji/96/bomb-emoji.png")
bombimg.setAttribute("class","bombimg")

bomb.prepend(bombimg)
let timer=document.createElement("p")
timer.setAttribute("class","timerinp")
bomb.append(timer)
timer.innerText="10"
subdiv.append(bomb)
let buttons=document.createElement("div")
buttons.setAttribute("class","buttonclass")
subdiv.appendChild(buttons)
let start=document.createElement("button")
start.setAttribute("class","startbtn")
start.setAttribute("onclick","starttime()")
let stop=document.createElement("button")
stop.setAttribute("class","endbtn")
stop.setAttribute("onclick","stoptime()")
buttons.append(start)
buttons.append(stop)
start.innerText="Start"
stop.innerText="Stop"

let countdown
let count=10;
function starttime(){
    
    countdown=setInterval( function(){
        count--;
        timer.innerText=count;
        if(count==0){
            clearInterval(countdown)
            bombimg.style.display="none";
            document.getElementById("blastimgid").style.display="block";
            timer.innerText="";
            buttons.innerHTML=`<P>Bomb Blasted 💥</p>`
            buttons.style.fontSize="30px"
        }
    },1000);
}
function stoptime(){
    clearInterval(countdown);
}




