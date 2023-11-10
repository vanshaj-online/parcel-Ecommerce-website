function scroll(){
    let scroller = document.querySelectorAll('.cat-prod');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let lastelem = document.querySelector('#last');
    let check = 'hidden';
    const observer = new IntersectionObserver(entries => {
        entries.forEach(last => {
            if (last.intersectionRatio !== 1) {
                next.addEventListener('click', function () {
                    scroller.forEach(elem => {
                        elem.style.transition = '.2s linear'
                        elem.style.transform = 'translateX(-100%)'
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
            console.log('clicked')
        })
    })
    observer.observe(lastelem);
}
scroll()

function dropdown(){
    var hovers = document.querySelectorAll('.hover');
    var main = document.querySelector('#main')
    hovers.forEach(elem => {
        elem.addEventListener('mousemove', function () {
            elem.classList.add('show')
            main.style.filter = 'blur(2px)'
        })
        elem.addEventListener('mouseleave', function () {
            elem.classList.remove('show')
            main.style.filter = 'blur(0)'
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