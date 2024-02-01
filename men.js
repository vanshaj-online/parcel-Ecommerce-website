function init(){
    let heading = document.querySelector('.shop > h1');
    let filterBtn = document.querySelectorAll('.filter-all');
    var footer = document.querySelector('footer');
    var loginbtn = document.querySelector('.profile')
    var loginhvr = document.querySelector('.hvr');
    let products = document.querySelectorAll('.shop-card');
    let btns = document.querySelectorAll('.filter > span');
    let searchbox = document.querySelector('.right-nav > input')
    let total = 0;
    
    


    function totalProducts(){
        products.forEach((e) =>{
            total += 1;
        })
    }
    totalProducts()

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
        var removeHidden = () => {
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
    }
    categoryFilter()

    function loader(){
        setTimeout(() =>{
                document.querySelector('.progress').style.animation = 'progress 1s linear 1 forwards';
            },1000)
    }

    function search(){
        searchbox.addEventListener(('input'),function(e){
            const value = e.target.value.toLowerCase();
            let hidden = 0;
            loader()
            setTimeout(() => {
                products.forEach((elem) =>{
                    elem.classList.remove("hidden")
                    let text = elem.children[0].children[2].children[0].firstChild.textContent.toLowerCase();
                    if(!text.includes(value)){
                        elem.classList.add('hidden');
                    }
                    if(elem.classList.contains('hidden')){
                        hidden += 1
                    }
                    if(hidden === total){
                        document.querySelector('.no-product').style.display = 'flex';
                    }else{document.querySelector('.no-product').style.display = 'none';}
                    document.querySelector('.progress').style.animation = '';
                })
            },1500)
        })
    }
    search()

}
init()