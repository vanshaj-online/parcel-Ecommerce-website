var imgDivs = document.querySelectorAll('.item');
function addDataSrc(){
    imgDivs.forEach((e) =>{
        let imgDivs = e.querySelector('img')
        let src = imgDivs.getAttribute('src').slice(6)
        e.style.background = `url(assets/lazyloads${src})`
    })
   
}
addDataSrc()

function dropdown(){
    var hovers = document.querySelectorAll('.hover');
    var main = document.querySelector('.hero')
    var s2 = document.querySelector('.section-2')
    var s3 = document.querySelector('.section-3')
    var s4 = document.querySelector('.section-4')
    var footer = document.querySelector('footer')
    hovers.forEach(elem => {
        elem.addEventListener('mousemove', function () {
            elem.classList.add('show')
            main.style.filter = 'blur(5px)'
            footer.style.filter = 'blur(5px)'
            s2.style.filter = 'blur(5px)'
            s3.style.filter = 'blur(5px)'
            s4.style.filter = 'blur(5px)'
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

function dropdownprofile(){
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

function lazyload(){
    imgDivs.forEach(eachItem =>{
        function loaded(){eachItem.classList.add('loaded')}
        let img = eachItem.querySelector('img');
        if(img.complete){
            loaded()
        }
        img.addEventListener('load',loaded())
    })
}
lazyload()