function dropdown() {
    var hovers = document.querySelectorAll('.hover');
    var main = document.querySelector('.main')
    var footer = document.querySelector('footer')
    hovers.forEach(elem => {
        elem.addEventListener('mousemove', function () {
            elem.classList.add('show')
            main.style.filter = 'blur(2px)'
            footer.style.filter = 'blur(2px)'
        })
        elem.addEventListener('mouseleave', function () {
            elem.classList.remove('show')
            main.style.filter = 'blur(0)'
            footer.style.filter = 'blur(0)'
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

function filterProduct() {
    var products = document.querySelectorAll('.shop-card');
    let btns = document.querySelectorAll('.filter > span');

    function changeColor(){
        btns.forEach(function(elem){
            elem.addEventListener('click',function(){
                elem.style.color = '#639fa5'

                btns.forEach(otherFilter =>{
                    if(otherFilter !== elem){
                        otherFilter.style.color ="";
                    }
                })
            })
            })
        
    }
    function removeHidden(){
        products.forEach(elem =>{
            if (elem.classList.contains('hidden')) {
                elem.classList.remove('hidden')
            }
        })
    }
    function tshirtFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('tshirt')) {
                elem.classList.add('hidden')
                document.querySelector("#tshirt").style.color = '#639fa5'
            }
        })
    }
    function shirtFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('shirt')) {
                elem.classList.add('hidden')
            }
        })
    }
    function jacketFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('jacket')) {
                elem.classList.add('hidden')
            }
        })
    }
    function bottomwearFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('jeans')) {
                elem.classList.add('hidden')
            }
        })
    }
    function shoesFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('shoes')) {
                elem.classList.add('hidden')
            }
        })
    }
    function accessoriesFilter() {
        products.forEach(elem => {
            if (!elem.classList.contains('accessories')) {
                elem.classList.add('hidden')
            }
        })
    }
    function lowPrice() {
        products.forEach((e) =>{
            let p = e.querySelector('#price').innerHTML;
            let arr = p.split(" ")
            let price = Number(arr[arr.length - 1]);
            if(price > 500){
                e.classList.add('hidden')
            } 
        })
        
    }
    function midPrice() {
        products.forEach((e) =>{
            let p = e.querySelector('#price').innerHTML;
            let arr = p.split(" ")
            let price = Number(arr[arr.length - 1]);
            if (price > 1000){
                e.classList.add('hidden')
                console.log(e)
            } 
        })
        
    }
    function highPrice() {
        products.forEach((e) =>{
            let p = e.querySelector('#price').innerHTML;
            let arr = p.split(" ")
            let price = Number(arr[arr.length - 1]);
            if (price > 1500) {
                e.classList.add('hidden')
                console.log(e)
            }        
        })
    }
    
 

    document.querySelector('#all').addEventListener('click', function () {
        removeHidden()
        changeColor()
    })
    document.querySelector('#tshirt').addEventListener('click', function () {
        removeHidden()
        changeColor()
        tshirtFilter()
    })
    document.querySelector('#shirt').addEventListener('click', function () {
        removeHidden()
        changeColor()
        shirtFilter()
    })
    document.querySelector('#jacket').addEventListener('click', function () {
        removeHidden()
        changeColor()
        jacketFilter()
    })
    document.querySelector('#jeans').addEventListener('click', function () {
        removeHidden()
        changeColor()
        bottomwearFilter()
    })
    document.querySelector('#shoes').addEventListener('click', function () {
        removeHidden()
        changeColor()
        shoesFilter()
    })
    document.querySelector('#accessories').addEventListener('click', function () {
        removeHidden()
        changeColor()
        accessoriesFilter()
    })
    document.querySelector('#low').addEventListener('click',function(){
        removeHidden()
        changeColor()
        lowPrice()
    })
    document.querySelector('#mid').addEventListener('click',function(){
        removeHidden()
        changeColor()
        midPrice()
    })
    document.querySelector('#high').addEventListener('click',function(){
        removeHidden()
        changeColor()
        highPrice()
        
    })
}
filterProduct()

