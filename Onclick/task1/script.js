let item=document.getElementsByClassName("container")[0];  //it will return html collection even if is single element
let items=document.getElementById("item");      //it return single element

function red(){
    item.style.backgroundColor = "red";
}
function green(){
    items.style.backgroundColor = "green";
}
function blue(){
    items.style.backgroundColor = "blue";
}
function purple(){
    item.style.backgroundColor = "purple";
}