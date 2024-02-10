

function dropdownprofile() {
    var loginbtn = document.querySelector('.profile')
    var loginhvr = document.querySelector('.hvr')
    loginbtn.addEventListener('mousemove', () => {
        loginhvr.classList.add('active')
    })
    loginbtn.addEventListener('mouseleave', () => {
        loginhvr.classList.remove('active')
    })
}
dropdownprofile()

function loginToSignup(){
    let newbtn = document.querySelector('#newbtn');
    let returnToLog = document.querySelector('#return')
    let signup = document.querySelector('.signup');
    let login = document.querySelector('.login');
    newbtn.addEventListener('click',function(){
        login.classList.add('animate-2')
        signup.classList.add('animate')
    })
    returnToLog.addEventListener('click',function(){
        login.classList.remove('animate-2')
        signup.classList.remove('animate')
    })
}
loginToSignup()

function loginMsg(){
    let num = document.querySelector("#no");
    let pwd = document.querySelector("#pwd");
    let warn = document.querySelector(".warn");
    if(num.value.length > 0 && pwd.value.length > 0){
        setTimeout(()=>{
            alert('Logged In Succesfully')
        },0)
    }
    else{
            warn.style.display = 'inline';
            warn.style.opacity = 1;
        setTimeout(() => {
            warn.style.display = 'none'
            warn.style.opacity = 0
        },3000)
    }
}

function toggleMenu() {
    let openmenu = document.querySelector('[data-open-menu]')
    let closemenu = document.querySelector('[data-close-menu]')
    let menu = document.querySelector('.side-bar')
    let main = document.querySelector('main')
    let nav = document.querySelector('nav')

    openmenu.addEventListener('click', function () {
        menu.style.transform = 'translatex(0%)'
        main.style.opacity = '0.5'
        nav.style.opacity = '0.5'
        menuStatus = 'opened'
    })
    closemenu.addEventListener('click', function () {
        menu.style.transform = 'translatex(100%)'
        nav.style.opacity = '1'
        main.style.opacity = '1'
        menuStatus = 'closed'
    })   

}

toggleMenu()
