let size=250;



function increase(){
    if(size<450){
        size+=50;
        document.getElementById("DodgeImg").style.height=size+"px";
        document.getElementById("DodgeImg").style.width=size+"px";

        document.getElementById("increase").textContent="Increase";
        document.getElementById("decrease").textContent="Decrease";
        
    }
    else{
        document.getElementById("increase").textContent="Maximum size reached";
    }
}
function decrease(){
    if(size>250){
        size-=50;
        document.getElementById("DodgeImg").style.height=size+"px";
        document.getElementById("DodgeImg").style.width=size+"px";

        document.getElementById("increase").textContent="Increase";
        document.getElementById("decrease").textContent="Decrease";
        
    }
    else{
        document.getElementById("decrease").textContent="Minimum size reached";
    }
}