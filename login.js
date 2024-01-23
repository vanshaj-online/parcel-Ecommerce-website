function dropdown() {
    var hovers = document.querySelectorAll('.hover');
    var main = document.querySelector('main')

    hovers.forEach(elem => {
        elem.addEventListener('mousemove', function () {
            console.log('mouse is moving')
            elem.classList.add('show')
            main.style.filter = 'blur(5px)'
            document.querySelector('body').style.background = 'whitesmoke'
        })
        elem.addEventListener('mouseleave', function () {
            elem.classList.remove('show')
            main.style.filter = 'blur(0)'
            document.querySelector('body').style.background = 'white'
        })
    })
}
dropdown()

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
