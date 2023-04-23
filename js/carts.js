let userInfo= document.querySelector("#user_info");
let userData= document.querySelector("#user");
let links= document.querySelector("#links");
let badge =document.querySelector(".badge");
let cartProductsDiv=document.querySelector(".carts_products div")
if(localStorage.getItem("userName")) {
    links.remove();
    userInfo.style.display="flex";
    userData.innerHTML = localStorage.getItem("userName");
}
let log_out =document.querySelector("#logout");
log_out.addEventListener("click",logOut);
function logOut(){
    localStorage.removeItem("userName"); 
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("transList");
    location.reload()
}
let transList=  JSON.parse( localStorage.getItem("transList"));
let allProducts=document.querySelector(".section-form_carts_2")
function drawCartBoxes(){
    let y = transList.map((item)=>{
        return`
        <div class="product_item">
        <img src="${item.imgUrl}" alt="" class="img">
        <div class="product_item_desc">
            <h2>${item.h2}</h2>
            <p>${item.p}</p>
            <span> ${item.span} </span>
        </div>
        <div class="product-item-action">
            <button class="add_to_card" onClick="removeFromCard(${item.id})">Remove from card</button>
        </div>
        </div>
        `
    });
    allProducts.innerHTML=y ;
};
if(transList){
    drawCartBoxes();
}
if (transList){
    transList.map(item =>{
        cartProductsDiv.innerHTML+=`
        <p>${item.h2}</p>
        `
    })
    badge.innerHTML=transList.length;
    badge.style.display="block";    
}