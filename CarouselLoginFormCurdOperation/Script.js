let images = document.getElementById("images");
let cross = document.getElementById("cross");
let form1 = document.getElementById("form");
let loginbtn = document.getElementById("loginbtn");
let botContainer = document.getElementsByClassName("dots")[0];
let dots = botContainer.children;
let table = document.querySelector('table')
let createbtn = document.getElementById('createbtn');
let name1 = document.getElementById('name');
let email = document.getElementById('email')
let phone = document.getElementById('phoneNum')
let showuser = document.getElementById('tableh');
let tabledisplay = document.getElementsByClassName('table1');


// console.log(name1,email,phone)
// console.log(createbtn);
// console.log(table)
// console.log(botContainer)
// console.log(dots)
let imgarray = ['https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/62e573855044e129.jpeg?q=60',
    'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/4bb8722b4e12b22c.png?q=60',
    'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5520ed7ca70bfdfa.jpg?q=60',
    'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/4bb8722b4e12b22c.png?q=60'
]



images.src = imgarray[0];
let count = 1;

function updateDots(count) {
    for (let i = 0; i < dots.length; i++) {
        if (i === count) {
            dots[i].style.backgroundColor = "#4A90E2";   // active dot
        } else {
            dots[i].style.backgroundColor = "white";  // other dots
        }
    }
}

updateDots(0);
setInterval(() => {
    if (count >= imgarray.length) {
        count = 0;
    }
    updateDots(count);
    images.src = imgarray[count++];
}, 2500)



cross.addEventListener('click', () => {
    // form1.style.display='none';
    form1.style.right = '-450px';
    form1.style.transitionDuration = '0.5s'
    form1.style.transitionTimingFunction = 'ease-in';
    loginbtn.style.display = 'block';
})

loginbtn.addEventListener('click', () => {
    // form1.style.display='block';
    form1.style.right = '0px';
    loginbtn.style.display = 'none';
    form1.style.transitionDuration = '0.5s'
    form1.style.transitionTimingFunction = 'ease-in';
})

form1.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.innerText);

    // ===== CREATE =====
    if (e.target.innerText === 'Create') {
        
        if (name1.value !== '' && email.value !== '' && phone.value !== '') {
            alert('User data adding in table');
            table.innerHTML += `
                <tr>
                    <td>${name1.value}</td>
                    <td>${email.value}</td>
                    <td>${phone.value}</td>
                    <th><button type="button">Edit</button></th>
                    <th><button type="button">Delete</button></th>
                </tr>
            `;
        }
        else{
            alert('Error: Field cannot be blank.');
        }

        name1.value = '';
        email.value = '';
        phone.value = '';
    }
});


table.addEventListener('click', (e) => {
    // console.log(e.target.innerText);

    // prevent wrong clicks
    if (e.target.tagName !== 'BUTTON') return;

    // ===== EDIT =====
    if (e.target.innerText === 'Edit') {
        console.log(e.target.parentElement.previousElementSibling)  
        phone.value = e.target.parentElement.previousElementSibling.innerText;      //giving prpreviousElementSibling element innertext of target which is phone
        email.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;    // giving email innertext
        name1.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;    // giving phone innertext        and assigning three values in form

        form1.style.right = '0px';
        loginbtn.style.display = 'none';
        form1.style.transitionDuration = '0.5s'
        form1.style.transitionTimingFunction = 'ease-in';

        e.target.innerText = 'Update';

    }

    // ===== UPDATE =====
    else if (e.target.innerText === 'Update') {

        e.target.parentElement.previousElementSibling.innerText = phone.value;
        e.target.parentElement.previousElementSibling.previousElementSibling.innerText = email.value;
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText = name1.value;

        e.target.innerText = 'Edit';

        name1.value = '';
        email.value = '';
        phone.value = '';
    }

    // ===== DELETE =====
    else if (e.target.innerText === 'Delete') {
        e.target.parentElement.parentElement.remove();    //selects super parent of target element which table row
    }
});

// console.log(tabledisplay[0])
tabledisplay[0].style.display = 'none';
showuser.addEventListener('click', (e) => {
    if (e.target.innerText === 'Show User Data') {
        tabledisplay[0].style.display = 'block';
        e.target.innerText = 'Close User Data';
    } else if (e.target.innerText === 'Close User Data') {
        tabledisplay[0].style.display = 'none';
        e.target.innerText = 'Show User Data';
    }
});