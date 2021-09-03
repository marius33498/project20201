import { baseUrl } from "./api.js";
import { getExistingFavs } from "./data/localstorage.js";


const favourite = getExistingFavs();

const totalPrice = document.querySelector(".total");

const cart = document.querySelector(".shoppingCart");

favourite.forEach((favourites) => {
    cart.innerHTML += `<div class="product"><h4>${favourites.name}</h4>${favourites.price}
     <img src="${favourites.image_url}">
    </div>`
})
/*
 console.log(shoe);
const cart = document.querySelector(".shoppingCart");

shoe.forEach(function(getApi){
    if(getApi.id === favourite){
        cart.innerHTML += `<div class="cart-item"><div class="row"><div class="col-sm-8"><h3>Title: ${getApi.title}</h3>
        <img src="${getApi.image_url}" ><p>Price: ${getApi.price}</p> 
        <button class="button" data-id="${getApi.id}" data-name="${getApi.title}"> Click here </button>
       </div></div>
        </div>`;
    }
    total += iceCream.price;
})

totalPrice.innerHTML = `${total}`;*/