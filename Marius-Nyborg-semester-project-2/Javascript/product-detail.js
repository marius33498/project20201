import { baseUrl } from "./api.js";

const productsUrl = baseUrl + "products";
const container = document.querySelector(".product-container");

/*
const cartList = document.querySelector(".cart-list");
const cart = document.querySelector(".cart-body");
*/

async function getProducts(){
    try { const response = await fetch(productsUrl);
    const results = await response.json();


 container.innerHTML = "";

 const facts = results;

 facts.forEach(function(facts) {
    container.innerHTML += `<div class="product"><div class="row"><div class="col-sm-8"><h3>Title: ${facts.title}</h3>
    <img src="${facts.image_url}" alt="${facts.name}" class="image"><p>${facts.description}</p><p>Price: ${facts.price}</p>  
    <button class="product-button" data-product="${facts.id}">Add to cart</button>
   </div></div> </div>`;
 })
    
 const buttons = document.querySelectorAll("button");

 buttons.forEach(function(button){
     button.onclick = function(event){
         console.log(event.target.dataset.product);
     }
 })
    }catch (error) {
        console.log(error);
    }
}

getProducts();

/*
function showCart(cartItem){
    cart.style.display = "block";

    cartItem.forEach(function(cartElement){
        cartList.innerHTML += `<div class="cart-item"><h4>${cartElement.description}</h4></div>`
    })
}*/
