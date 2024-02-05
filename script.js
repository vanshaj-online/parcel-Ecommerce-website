const imgDivs = document.querySelectorAll('.item');
let bannerImages = document.querySelectorAll('.img-container > img')
function addDataSrc() {
    imgDivs.forEach((e) => {
        let imgDivs = e.querySelector('img')
        let src = imgDivs.getAttribute('src').slice(6)
        e.style.background = `url(assets/lazyloads${src})`
    })

}
addDataSrc()



function dropdownprofile() {
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

function lazyload() {
    imgDivs.forEach(eachItem => {
        function loaded() { eachItem.classList.add('loaded') }
        let img = eachItem.querySelector('img');
        if (img.complete) {
            loaded()
        }
        img.addEventListener('load', loaded())
    })
}
lazyload()

function changeImg() {
    var counter = 0;
    let imgs = document.querySelectorAll('.imgs > img');
    let btns = document.querySelectorAll('.img-container > button');
    imgs.forEach((img, index) => {
        img.style.left = `${index * 100}%`
    })

    function slideImgs() {
        imgs.forEach((img) => {
            img.style.transform = `translatex(-${counter * 100}%)`
        })
    }

    document.querySelector('[data-left] > img').addEventListener('click', function () {
        if (counter == 0) {
            document.querySelector('[data-left]').setAttribute('disabled', 'true')
        }
        else {
            counter = counter - 1;
            slideImgs()
        }
    })
    document.querySelector('[data-right] > img').addEventListener('click', function () {
        if (counter >= 2) {
            document.querySelector('[data-right]').setAttribute('disabled', 'true')
        }
        else {
            counter = counter + 1;
            slideImgs()
        }
    })
}
changeImg()

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
