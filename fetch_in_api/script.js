// 'https://fakestoreapi.com/products'.
let button = document.getElementById("btn")
let container = document.getElementById("products")

button.addEventListener("click",function(){
    fetch('https://fakestoreapi.com/products')
    .then(resposse => resposse.json())
    .then(data => {
        data.forEach(product => {
            let div = document.createElement("div")
            container.appendChild(div)

        });
    })
})