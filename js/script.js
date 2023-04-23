// localStorage.setItem("first-Car","BMW");
// console.log(localStorage.getItem("first-Car")); 
// localStorage.removeItem("first-Car"); 
// localStorage.clear();
let userInfo= document.querySelector("#user_info");
let userData= document.querySelector("#user");
let links= document.querySelector("#links");
//////////////////
if(localStorage.getItem("userName")) {
    links.remove();
    userInfo.style.display="flex";
    userData.innerHTML = localStorage.getItem("userName");
}
let allProducts = document.getElementById("products");
let products = [
    {
        id:1,
        h2:"Maserati Fashion Watch",
        p:"Model: R8871612015)",
        span:"Blue",
        imgUrl:"images/product.jpg"
    },
    {
        id:2,
        h2:"Chronograph Watch",
        p:"EFR-539D-1A2VUDF",
        span:"white ",
        imgUrl:"images/product2.jpg"
    },
    {
        id:3,
        h2:"SAMSUNG Galaxy Watch5",
        p:"Health Monitoring, Fitness Tracker",
        span:"Black",
        imgUrl:"images/product3.jpg"
    },
    {
        id:4,
        h2:"BOSS",
        p:"Chronograph Quartz Watch",
        span:"Blue",
        imgUrl:"images/product6.jpg"
    },
    {
        id:5,
        h2:"Naviforce",
        p:"Analog Unisex Watch",
        span:"Black Dial,Blue",
        imgUrl:"images/product4.jpg"
    },
    {
        id:6,
        h2:"Rolex",
        p:"Model: R8871612015)",
        span:"Blue",
        imgUrl:"images/product5.jpg"
    },
    {
        id:7,
        h2:"Maserati Fashion Watch",
        p:"Model: R8871612015)",
        span:"Blue",
        imgUrl:"images/product.jpg"
    },
];
function drawBoxes(){
    let y = products.map((item)=>{
        return`
        <div class="product_item">
        <img src="${item.imgUrl}" alt="" class="img">
        <div class="product_item_desc">
            <h2>${item.h2}</h2>
            <p>${item.p}</p>
            <span> ${item.span} </span>
        </div>
        <div class="product-item-action">
            <button class="add_to_card" onClick="addToCard(${item.id})">Add to card</button>
            <i class="far fa-heart fav"></i>
        </div>
        </div>
        `
    });
    allProducts.innerHTML=y ;
    allProducts.innerHTML+=y ;
};
drawBoxes();
// var x= 0;
let cartProductsDiv=document.querySelector(".carts_products div")
let badge =document.querySelector(".badge");
let pList=document.querySelectorAll(".carts_products div p");
var transList=localStorage.getItem("transList") ? JSON.parse(localStorage.getItem("transList")) :[];
var x= transList.length;
if (transList!=""){
    transList.map(item =>{
        cartProductsDiv.innerHTML+=`
        <p>${item.h2}</p>
        `
    })
    badge.innerHTML=transList.length;
    badge.style.display="block";    
}
function addToCard(id){
if(localStorage.getItem("userName")){

        let choosenItem =products.find((item)=> id===item.id)
        cartProductsDiv.innerHTML+=`
        <p>${choosenItem.h2}</p>
        `
        // let badge =document.querySelector(".badge");
        // let pList=document.querySelectorAll(".carts_products div p");
        transList[x]=choosenItem
        localStorage.setItem("transList",JSON.stringify(transList));
        badge.innerHTML=transList.length;
        badge.style.display="block";
        x=x+1;
}else{
    window.location= "register.html";
};
};
// let cartProductsDiv=document.querySelector(".carts_products div")
// function addToCard(id){
//     let choosenItem =products.find((item)=> id===item.id)
//     cartProductsDiv.innerHTML+=`
//     <p>${choosenItem.h2}</p>
//     `
//     let badge =document.querySelector(".badge");
//     let pList=document.querySelectorAll(".carts_products div p");
//     badge.innerHTML=pList.length;
//     badge.style.display="block";
// }
let cartProductsList=document.querySelector(".carts_products")
let shopping_Cart=document.querySelector("#shopping_Cart");
shopping_Cart.addEventListener("click",opencart);
function opencart(){
    if(cartProductsDiv.innerHTML !=""){
        if(cartProductsList.style.display=="block"){
            cartProductsList.style.display="none"
        }else{
            cartProductsList.style.display="block"
        }
    }
}
// let badge =document.querySelector(".badge");
// let pList=document.querySelectorAll(".carts_products div p");
// badge.innerHTML=pList.length()
let log_out =document.querySelector("#logout");
log_out.addEventListener("click",logOut);
function logOut(){
    localStorage.removeItem("userName"); 
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("transList");
    location.reload()
}
let loveIcon =document.querySelectorAll(".product-item-action i");
loveIcon.forEach((item)=>{
item.addEventListener("click",toRed);
function toRed(){
    if(item.style.color == "red"){
        item.style.color = "black";
        item.style.fontSize ="20px"
    }else{
        item.style.color = "red";
        item.style.fontSize ="24px"
    }
}})