function scroll(){
    let scroller = document.querySelectorAll('.cat-prod');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let lastelem = document.querySelector('#last');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(last => {
            if (last.intersectionRatio !== 1) {
                next.addEventListener('click', function () {
                    scroller.forEach(elem => {
                        elem.style.transition = '.2s linear'
                        elem.style.transform = `translateX(${-window.innerWidth/1.5+'px'})`
                    })
                    next.classList.remove('show')
                    prev.classList.add('show')
                })
                check = 'shown'
            }
        })
        prev.addEventListener('click', function () {
            scroller.forEach(elem => {
                elem.style.transition = '.2s linear'
                elem.style.transform = 'translateX(0%)'
            })
            prev.classList.remove('show')
            next.classList.add('show')
        })
    })
    observer.observe(lastelem);

}
scroll()


function dropdownprofile() {
    var loginbtn = document.querySelector('.profile')
    var loginhvr = document.querySelector('.hvr')
    loginbtn.addEventListener('mousemove', () => {        loginhvr.classList.add('active')
    })
    loginbtn.addEventListener('mouseleave', () => {
        loginhvr.classList.remove('active')
    })
}
dropdownprofile()

function toggleMenu() {
    let openmenu = document.querySelector('[data-open-menu]')
    let closemenu = document.querySelector('[data-close-menu]')
    let menu = document.querySelector('.side-bar')
    

    openmenu.addEventListener('click', function () {
        menu.style.transform = 'translatex(0%)'
        main.style.opacity = '0.5'
    })
    closemenu.addEventListener('click', function () {
        menu.style.transform = 'translatex(100%)'
        main.style.opacity = '1'
    })
    main.addEventListener('click',function(){
        menu.style.transform = 'translatex(100%)'
        main.style.opacity = '1'
    })

}

toggleMenu()