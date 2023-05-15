
let productsJSON = ` [
    {
        "id":10,
        "name":"vaz1",
        "price": 123,
        "img":"img/1.jpg",
        "isFav": false
    }, 
    {
        "id":25,
        "name":"vaz2",
        "price": 150,
        "img":"img/2.jpg",
        "isFav": false
    }, 
    {
        "id":34,
        "name":"uaz",
        "price": 340,
        "img":"img/3.jpg",
        "isFav": false
    }, 
    {
        "id":13,
        "name":"gaz",
        "price": 90,
        "img":"img/4.jpg",
        "isFav": false
    }, 
    {
        "id":45,
        "name":"paz",
        "price": 780,
        "img":"img/5.jpg",
        "isFav": false
    }
]`;
let products;
if (localStorage.getItem("products")){ //если существует локальная переменная products
     products = JSON.parse(localStorage.getItem("products"));
}
else {
    products = JSON.parse(productsJSON);
}



const catalog = document.querySelector(".catalog");


const render = (container, mass)=>{
    container.innerHTML = "";
    mass.forEach((item)=>{
        //вывод товаров на страницу в catalog
    let newProduct = document.createElement("div"); //создали контейнер div
    newProduct.classList.add("card");
    newProduct.dataset.id = item.id;
    let textBtn;
    newProduct.innerHTML = `<img src="${item.img}" alt="${item.name}">
    <p class="name">${item.name}</p>
    <p class="price">${item.price} &#8381; </p>
    `; 
    
    // в блок поместили название товара из массива
    container.append(newProduct);
    });

}

render(catalog, products);

let productsFav = products.filter((item)=>{
    return item.isFav;
});
render(favs, productsFav);

