function init(){
    let heading = document.querySelector('.shop > h1');
    let filterBtn = document.querySelectorAll('.filter-all');
    let loader = document.querySelector('.loader');
    var hovers = document.querySelectorAll('.hover');
    var main = document.querySelector('main')
    var footer = document.querySelector('footer');
    var loginbtn = document.querySelector('.profile')
    var loginhvr = document.querySelector('.hvr');
    var products = document.querySelectorAll('.shop-card');
    let btns = document.querySelectorAll('.filter > span');

    function dropdown() {    
        hovers.forEach(elem => {
            elem.addEventListener('mousemove', function () {
                elem.classList.add('show')
                main.style.filter = 'blur(5px)'
                footer.style.filter = 'blur(5px)'
                document.querySelector('body').style.background = 'whitesmoke'
            })
            elem.addEventListener('mouseleave', function () {
                elem.classList.remove('show')
                main.style.filter = 'blur(0)'
                footer.style.filter = 'blur(0)'
                document.querySelector('body').style.background = 'white'
            })
        })
    }
    dropdown()

    function dropdownprofile() {
        
        loginbtn.addEventListener('mousemove', () => {
            loginhvr.classList.add('active')
        })
        loginbtn.addEventListener('mouseleave', () => {
            loginhvr.classList.remove('active')
        })
    }
    dropdownprofile()

    function filterProduct() {
        function changeColor() {
            btns.forEach(function (elem) {
                elem.addEventListener('click', function () {
                    elem.style.color = '#639fa5'
                    btns.forEach(otherFilter => {
                        if (otherFilter !== elem) {
                            otherFilter.style.color = "";
                        }
                    })
                })
            })

        }
        function removeHidden() {
            products.forEach(elem => {
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
        function bagsFilter() {
            products.forEach(elem => {
                if (!elem.classList.contains('bags')) {
                    elem.classList.add('hidden')
                    console.log('bags function ran successfully')
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
            products.forEach((e) => {
                let p = e.querySelector('#price').innerHTML;
                let arr = p.split(" ")
                let price = Number(arr[arr.length - 1]);
                if (price > 500 && !e.classList.contains('hidden')) {
                    e.classList.add('hidden')
                }
            })
        }
        function midPrice() {
            products.forEach((e) => {
                let p = e.querySelector('#price').innerHTML;
                let arr = p.split(" ")
                let price = Number(arr[arr.length - 1]);
                if (price > 1000 ) {
                    if (!e.classList.contains('hidden')){
                        e.classList.add('hidden')
                    }
                }
            })
        }
        function highPrice() {
            products.forEach((e) => {
                let p = e.querySelector('#price').innerHTML;
                let arr = p.split(" ")
                let price = Number(arr[arr.length - 1]);
                if (price > 1500 && !e.classList.contains('hidden')) {
                    e.classList.add('hidden')
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
        document.querySelector('#bags').addEventListener('click', function () {
            removeHidden()
            changeColor()
            bagsFilter()
            console.log('bags button clicked successfully')
        })
        document.querySelector('#accessories').addEventListener('click', function () {
            removeHidden()
            changeColor()
            accessoriesFilter()
        })
        document.querySelector('#low').addEventListener('click', function () {
            removeHidden()
            changeColor()
            lowPrice()
        })
        document.querySelector('#mid').addEventListener('click', function () {
            removeHidden()
            changeColor()
            midPrice()
        })
        document.querySelector('#high').addEventListener('click', function () {
            removeHidden()
            changeColor()
            highPrice()

        })
    }
    filterProduct()


    function categoryFilter() {
        function hideFilters() {
            filterBtn.forEach((each) => {
                each.classList.add('closed')
            })
        }
        function changeHeading(category) {
            heading.innerHTML = `Stylish ${category} for stylish you`
        }
        function onlyUpper() {
            products.forEach(elem => {
                if (!elem.classList.contains('upper')) {
                    elem.classList.add('hidden')
                    console.log(elem)
                } else if (elem.classList.contains('upper') && elem.classList.contains('hidden')) {
                    elem.classList.remove('hidden')
                }
            })
        }
        function onlyBottom() {
            products.forEach(elem => {
                if (!elem.classList.contains('bottom')) {
                    elem.classList.add('hidden')
                }
                else if (elem.classList.contains('bottom') && elem.classList.contains('hidden')) {
                    elem.classList.remove('hidden')
                }
            })
        }
        function onlyGoggles() {
            products.forEach(elem => {
                if (!elem.classList.contains('goggles')) {
                    elem.classList.add('hidden')
                }
                else if (elem.classList.contains('goggles') && elem.classList.contains('hidden')) {
                    elem.classList.remove('hidden')
                }
            })
        }
        function onlyShoes() {
            products.forEach(elem => {
                if (!elem.classList.contains('shoes')) {
                    elem.classList.add('hidden')
                }
                else if (elem.classList.contains('shoes') && elem.classList.contains('hidden')) {
                    elem.classList.remove('hidden')
                }
            })
        }
        function onlyBags() {
            products.forEach(elem => {
                if (!elem.classList.contains('bags')) {
                    elem.classList.add('hidden')
                }
                else if (elem.classList.contains('bags') && elem.classList.contains('hidden')) {
                    elem.classList.remove('hidden')
                }
            })
        }
        document.querySelector('#upper').addEventListener('click', function () {
            hovers.forEach(elem =>{
                elem.classList.remove('show')
            })
            loader.classList.remove('black');
            main.style.filter = 'blur(5px)'
            footer.style.filter = 'blur(5px)'
            document.querySelector('body').style.background = 'whitesmoke'
            setTimeout(function () {
                hideFilters()
                changeHeading('Upperwears')
                onlyUpper()
                loader.classList.add('black')
                main.style.filter = 'blur(0)'
                footer.style.filter = 'blur(0)'
                document.querySelector('body').style.background = 'white'
            }, 1000)
        })
        document.querySelector('#bottoms').addEventListener('click', function () {
            hovers.forEach(elem => {
                elem.classList.remove('show')
            })
            loader.classList.remove('black');
            main.style.filter = 'blur(5px)'
            footer.style.filter = 'blur(5px)'
            document.querySelector('body').style.background = 'whitesmoke'
            setTimeout(function () {
                hideFilters()
                changeHeading('Bottomwears')
                onlyBottom()
                loader.classList.add('black')
                main.style.filter = 'blur(0)'
                footer.style.filter = 'blur(0)'
                document.querySelector('body').style.background = 'white'
            }, 1000)
        })
        document.querySelector('#goggles').addEventListener('click', function () {
            hovers.forEach(elem => {
                elem.classList.remove('show')
            })
            loader.classList.remove('black');
            main.style.filter = 'blur(5px)'
            footer.style.filter = 'blur(5px)'
            document.querySelector('body').style.background = 'whitesmoke'
            setTimeout(function () {
                hideFilters()
                changeHeading('Eyewears')
                onlyGoggles()
                loader.classList.add('black')
                main.style.filter = 'blur(0)'
                footer.style.filter = 'blur(0)'
                document.querySelector('body').style.background = 'white'
            }, 1000)
        })
        document.querySelector('#footwear').addEventListener('click', function () {
            hovers.forEach(elem => {
                elem.classList.remove('show')
            })
            loader.classList.remove('black');
            main.style.filter = 'blur(5px)'
            footer.style.filter = 'blur(5px)'
            document.querySelector('body').style.background = 'whitesmoke'
            setTimeout(function () {
                hideFilters()
                changeHeading('Footwears')
                onlyShoes()
                loader.classList.add('black')
                main.style.filter = 'blur(0)'
                footer.style.filter = 'blur(0)'
                document.querySelector('body').style.background = 'white'
            }, 1000)
        })
        document.querySelector('#bag').addEventListener('click', function () {
            hovers.forEach(elem => {
                elem.classList.remove('show')
            })
            loader.classList.remove('black');
            main.style.filter = 'blur(5px)'
            footer.style.filter = 'blur(5px)'
            document.querySelector('body').style.background = 'whitesmoke'
            setTimeout(function () {
                hideFilters()
                changeHeading('Bags')
                onlyBags()
                loader.classList.add('black')
                main.style.filter = 'blur(0)'
                footer.style.filter = 'blur(0)'
                document.querySelector('body').style.background = 'white'
            }, 1000)
        })
    }
    categoryFilter()
}
init()