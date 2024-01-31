const imgDivs = document.querySelectorAll('.item');
let bannerImages = document.querySelectorAll('.img-container > img')
function addDataSrc(){
    imgDivs.forEach((e) =>{
        let imgDivs = e.querySelector('img')
        let src = imgDivs.getAttribute('src').slice(6)
        e.style.background = `url(assets/lazyloads${src})`
    })
   
}
addDataSrc()



function dropdownprofile(){
     let loginbtn = document.querySelector('.profile')
     let loginhvr = document.querySelector('.hvr')
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

function changeImg(){
    var counter = 1;
    let imgs = document.querySelectorAll('.img-container > img')
    let btns = document.querySelectorAll('.img-container > button')
 
        document.querySelector('[data-left] > img').addEventListener('click',function(){
            if(counter == 1){
                document.querySelector('[data-left]').setAttribute('disabled','true')
            }
            else{
                counter = counter - 1;
                console.log(counter)
            }
        })
        document.querySelector('[data-right] > img').addEventListener('click',function(){
            if(counter >= 3){
                document.querySelector('[data-right]').setAttribute('disabled','true')
            }
            else{
                counter = counter + 1;
                console.log(counter )
                imgs[1].style.transform = 'translatex(-100%)'
            }
        })
    // document.querySelector('[data-left] > img').addEventListener('click',function(){console.log('hey')})
}
changeImg()