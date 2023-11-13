function dropdown() {
    var hovers = document.querySelectorAll('.hover');
    var main = document.querySelector('.hero')
    var s2 = document.querySelector('.section-2')
    var s3 = document.querySelector('.section-3')
    var s4 = document.querySelector('.section-4')
    var footer = document.querySelector('footer')
    hovers.forEach(elem => {
        elem.addEventListener('mousemove', function () {
            elem.classList.add('show')
            main.style.filter = 'blur(2px)'
            footer.style.filter = 'blur(2px)'
            s2.style.filter = 'blur(2px)'
            s3.style.filter = 'blur(2px)'
            s4.style.filter = 'blur(2px)'
        })
        elem.addEventListener('mouseleave', function () {
            elem.classList.remove('show')
            main.style.filter = 'blur(0)'
            footer.style.filter = 'blur(0)'
            s2.style.filter = 'blur(0)'
            s3.style.filter = 'blur(0)'
            s4.style.filter = 'blur(0)'
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
    if(num.value.length > 0 && pwd.value.length > 0){
        setTimeout(()=>{
            alert('Logged In Succesfully')
        },0)
    }
    else{
        alert('please fill required input fields!')
    }
}