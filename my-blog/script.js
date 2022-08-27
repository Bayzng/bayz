'use strict'

const modalEl = document.querySelector('.modal')
const showModal = document.querySelectorAll('.show-modal')
const closeModal = document.querySelector('.close-modal')
const overlayEl = document.querySelector('.overlay')
const userName = document.querySelector('.username')
const phone = document.querySelector('.phone')
const email = document.querySelector('.email')
const address = document.querySelector('.address')
const signin = document.querySelector('.signin')
const btncheck = document.querySelector('.btncheck')



const showModalfn = function() {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden')
}

const closeModelfn = function () {
    overlayEl.classList.add('hidden')
    modalEl.classList.add('hidden')
}


for (let i = 0; i < showModal.length; i++) {
    const showModalEl = showModal[i];
    console.log(showModalEl)

    showModalEl.addEventListener('click', showModalfn);
        
}

closeModal.addEventListener('click', closeModelfn);
    

overlayEl.addEventListener('click', closeModelfn);


document.addEventListener('keydown', function(e) {
    console.log(e);
    if (e.key === "Escape") {
        closeModelfn()
    }
})



const account1 = {
    owner: 'Azizat',
    Email: "ayofe70@gmail.com",
    Address: 'osun state'
}
// const account2 = {
//     owner: 'Thanks bayo',
//     Email: "ayofe70@gmail.comm",
//     Address: 'osun state'
// }

const account = [account1]
console.log(account1)
console.log()



// signin.addEventListener('click', function(){
//     const userName = account.value

//     account === userName

//     const user = account.owner
    
//     if (account.owner === account.email) {
//         // userName.value = "";
//         phone.value = "";
//         email.value = "";
//         address.value = "";
//         btncheck.textContent = `Reg. Successfull ✔ ${user}`
//         btncheck.style.color = 'green'
//     } 
//     console.log('working')
// })


//NAV BAR

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }