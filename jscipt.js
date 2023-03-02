let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll =()=> {
    window.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('search-icons').onclick = ()=>{
    
}
