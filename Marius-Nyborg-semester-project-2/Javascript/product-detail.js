import { baseUrl } from "./api.js";
import { getExistingFavs } from "../Javascript/data/localstorage.js";

const productsUrl = baseUrl + "products";
const container = document.querySelector(".product-container");

let favourites = getExistingFavs();

const buttons = document.querySelectorAll("button");



/*
const cartList = document.querySelector(".cart-list");
const cart = document.querySelector(".cart-body");
*/


async function getProducts(){
    try { const response = await fetch(productsUrl);
    const results = await response.json();


 container.innerHTML = "";

 const facts = results;

 results.forEach(function(products){

    

 facts.forEach(function(facts) {
    container.innerHTML += `<div class="product"><div class="row"><div class="col-sm-8"><h3 id="producth3">Title: ${facts.title}</h3>
    <img src="${facts.image}" alt="${facts.name}" class="w-100"><p id="pDescrition">${facts.description}</p><p>Price: ${facts.price}</p>  
    <button class="product-button" data-product="${facts.id}">Add to cart</button>
   </div></div> </div>`;
 })
const buttons = document.querySelectorAll(".product-button");

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener("click", handleClick);
   
});

    }catch (error) {
        console.log(error);
    }
  }
}
getProducts();




function handleClick() {
    this.classList.toggle("button");
    
    const id = this.dataset.id;

    currentFavs.push(parseInt(id));
    localStorage.setItem("button", JSON.stringify(currentFavs));
}