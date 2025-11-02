let a=0;
let count=document.getElementById("countvalue");

function increase(){
    
    if(a<20){
        a+=1;
        count.innerText=a;

        document.getElementById("increase").innerText="Increase"
        document.getElementById("decrease").innerText="Decrease"
    }
    else{
        document.getElementById("increase").innerText="Count Max Reached"
    }
}

function reset(){
    a=0;
    count.textContent=0;
    document.getElementById("increase").innerText="Increase"
    document.getElementById("decrease").innerText="Decrease"
}

function decrease(){
    if(a!=0){
        a-=1;
        count.innerText=a;

        document.getElementById("increase").innerText="Increase"
        document.getElementById("decrease").innerText="Decrease"
    }
    else{
        document.getElementById("decrease").innerText="Min Count Reached"
    }
}
