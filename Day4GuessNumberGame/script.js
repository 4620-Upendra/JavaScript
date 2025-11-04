let randomnum=Math.floor(Math.random()*100)
console.log(randomnum)
let inputValue=document.getElementById("input");
let guess=0;
let p3=document.getElementById("subp3");
let p4=document.getElementById("subp4");
let result=document.getElementById("result")
p3.style.fontSize="1.1rem"
p4.style.fontSize="1.1rem"
result.style.fontSize="1.1rem"
p3.innerText = "Guesed numbers are: ";

function guessbtn(){
    p3.innerText += inputValue.value+",";  
    p4.innerText="No. of guesses:"
    guess++;
    if(randomnum==inputValue.value){
        resultPageUi();
    }
    else if(inputValue.value>randomnum){
        p4.textContent+=`${guess}`
        result.textContent="Your guess is too high.😯"
    }
    else{
        p4.textContent+=`${guess}`
        result.textContent="Your guess is too low.😯"
    }
}

let  resultfrom=document.getElementById("fromOfResult");

function resultPageUi(){
    resultfrom.innerHTML=`
<div id="resultdiv">
<div id="restbtn"><button id="restartbtn" onClick="location.reload()">Restart</button></div>
<div id="resultmatter">
<p>Congratulations🎉!</p>
<p id="resultp2"></p>
<p id="resultp3"></p>
</div>
</div>
`
let resultcontent=document.getElementById("resultdiv")

document.getElementById("restartbtn").style.cursor = "pointer";
document.getElementById("gamename").style.backgroundColor="transparent"
document.getElementById("resultp2").innerText=`The number was ${inputValue.value}`
document.getElementById("resultp3").innerText=`You guessed the number in ${guess} tries.`
resultfrom.style.display="flex";
resultfrom.style.cssText = "justify-content:center; background-color:#6A0DAD; height:70%; width:30%; font-size:1.2rem;";
let paras=document.querySelectorAll("#resultmatter p")
paras.forEach(p=>{
    p.style.margin="3px";
})

document.getElementById("resultp3").innerText=`You guessed the number in ${guess} tries.`
document.getElementById("resultmatter").style.cssText = "display:flex; flex-direction:column; align-items:center;";
document.getElementById("restartbtn").style.cssText="padding:5px; margin:10px;"
document.getElementById("restartbtn").style.marginLeft="40%"
document.getElementById("resultdiv").style.cssText="height:50%; width:75%"
}
