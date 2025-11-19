let input1=document.getElementById("input");
let resultimg=document.getElementById("resultimg")


let goalslist=[
    {img:"https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.jpg?b=1&s=170667a&w=0&k=20&c=yCgo02F66I8b1rgmnSXTyeN42k16-rti3iWszjZijWM=",
     goal: "software engineer 🚀"
    },
    {img:"https://tse4.mm.bing.net/th/id/OIP.6pPEmZtX9_oxAfKe4tzO3AHaHa?pid=Api&P=0&h=180",
     goal: "Police 🚀"
    },
    {img:"https://tse1.mm.bing.net/th/id/OIP.QxxuPNeshzBl2XrvTROJ5AHaEO?pid=Api&P=0&h=180",
      goal: "Cybersecurity Analyst 🚀"  
    },
    {img:"https://tse2.mm.bing.net/th/id/OIP.4sfToMY7l2ylHFOzPeWiOQHaFj?pid=Api&P=0&h=180",
    goal: "Entrepreneur 🚀"
    },
    {img:"https://tse3.mm.bing.net/th/id/OIP.T1u6Gr1XJVQYQ6sjfQMlcgHaHa?pid=Api&P=0&h=180",
    goal: "Doctor 🚀"
    },
    {img:"https://tse1.mm.bing.net/th/id/OIP.eK8ZhZ1Re6D0mbSwxjsUmgHaFj?pid=Api&P=0&h=180",
    goal: "IAS Officer 🚀"
    },
    {img:"https://static.vecteezy.com/system/resources/previews/027/662/789/large_2x/law-and-authority-lawyer-concept-judgment-gavel-hammer-in-court-courtroom-for-crime-judgement-legislation-and-judicial-decision-free-photo.jpg",
    goal: "Lawyer 🚀"
    },
    {img:"https://tse4.mm.bing.net/th/id/OIP.JH9w1GB7mt7SX94y0v8FfQHaFW?pid=Api&P=0&h=180",
    goal: "Traveler 🚀"
    }
]

resultimg.style.display="none"

function predictGoal(){
   let count=0;
   if(input1.value==""){
       alert("please enter your name")
       return;
    }
    let timer =setInterval(()=>{
        resultimg.style.display="block"
        let randomNum=Math.ceil(Math.random()*8-1)
        document.getElementById("result1").innerText=`${input1.value}, your future goal might be: ${goalslist[randomNum].goal}`
        document.getElementById("resultimg").setAttribute("src",goalslist[randomNum].img);
        console.log(goalslist[randomNum].goal)
        count++;  
        if(count==50){
        clearInterval(timer);
        count=0;
        document.getElementById("result1").innerText=input1.value+`, your future goal is: `+ goalslist[randomNum].goal;
        document.getElementById("resultimg").setAttribute("src",goalslist[randomNum].img);
        input1.value="";
        console.log(count)
        }
    },100)
    
}

