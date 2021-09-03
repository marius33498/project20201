import { baseUrl } from "./api.js";
import { getExistingFavs } from "./data/getFavs.js";

const totalProducts = document.querySelector(".total b");


let favourites = getExistingFavs();

favourites.forEach(favoruite => {
    baseUrl.forEach(iceCream =>{
        if(iceCream.id === favoruite){
            cart.innterHTML += '<div class="cart-item"></div>'
        }
    })
})

const cart = document.querySelector(".shoppingCart");

