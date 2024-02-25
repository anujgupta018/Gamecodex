let login = document.getElementById('login')
let loginpage=document.getElementById('loginpage')
let closebtn = document.getElementById('close-btn');
let submit = document.getElementById('submit');
let signup = document.getElementById('signup');
let signpage = document.getElementById('signpage');
let closebtn2 = document.getElementById('close-btn2');

let email=document.getElementById('email')
let password = document.getElementById('password')

login.addEventListener('click', function () {
    loginpage.style.display = 'block';
})
closebtn.addEventListener('click', function () {
    loginpage.style.display = 'none';
})
submit.addEventListener('click', function (){
    loginpage.style.display='none'
})
window.addEventListener('click', function (e) {
    if (e.target === loginpage) {
        loginpage.style.display = 'none';
    }
})
signup.addEventListener('click', function () {
    signpage.style.display = 'block';
})
closebtn2.addEventListener('click', function () {
    signpage.style.display = 'none';
})
window.addEventListener('click', function (a) {
    if (a.target === signpage) {
        signpage.style.display = 'none';
    }
})
