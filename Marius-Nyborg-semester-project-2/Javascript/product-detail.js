import { baseUrl } from "./api.js";
import { getExistingFavs } from "../Javascript/data/localstorage.js";

const productsUrl = baseUrl + "products";
const container = document.querySelector(".product-container");

const pushShoe = getExistingFavs();


let getApi = [];



//this line display the data
function displayData(data) {
  
    container.innerHTML = '';

  data.forEach(function (getApi) {
    container.innerHTML += `<div class="product"><div class="row"><div class="col-sm-8"><h3>Title: ${getApi.title}</h3>
          <img src="${getApi.image_url}" ><p>Price: ${getApi.price} </p> 
          <p>${getApi.description}</p>
          <button class="button" data-id="${getApi.id}" data-name="${getApi.title}"> Click here </button>
         </div></div>
          </div>`;
  });
  const buttons = document.querySelectorAll(".product button");


buttons.forEach((button) => {
   
    button.addEventListener("click", handleClick);
});
}

//this will get the data from my strapi
async function getData() {
  try {
    const response = await fetch('http://localhost:1337/products');
   
    const results = await response.json();
    const getApi = results;
    
    return getApi;
  } catch (error) {
    console.log(error);
  }
}

async function init() {
    getApi = await getData();
  displayData(getApi);
}

init();
//const cartList = document.querySelector(".cart-list");
//const cart = document.querySelector(".cart-body");



function handleClick() {
    this.classList.toggle("button");

    
    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = this.dataset.price;
    
     const both = { id: id, name: name, price: price};
    
     console.log(this.dataset);

    pushShoe.push((both));

    localStorage.setItem("shoe", JSON.stringify(pushShoe));

    const fetchedData = JSON.parse(localStorage.getItem(pushShoe));
}

