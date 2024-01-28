var imgDivs = document.querySelectorAll('.item');
function addDataSrc(){
    imgDivs.forEach((e) =>{
        let imgDivs = e.querySelector('img')
        let src = imgDivs.getAttribute('src').slice(6)
        e.style.background = `url(assets/lazyloads${src})`
    })
   
}
addDataSrc()



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
