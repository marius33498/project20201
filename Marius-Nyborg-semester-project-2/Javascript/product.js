import { baseUrl } from "./api.js";

const productsUrl = baseUrl + "products";
const container = document.querySelector(".product-container");


async function getCats(){
   

try{
    const response = await fetch(productsUrl);
       const results = await response.json();


    container.innerHTML = "";

    const facts = results;

console.log(facts);


facts.forEach(function(facts) {
        container.innerHTML += `<div class="product"><div class="row"><div class="col-sm-8"><h3>Title: ${facts.title}</h3>
        <img src="${facts.image_url}" alt="${facts.name}" class="w-100"><p>Price: ${facts.price}</p>  
       </div></div>
        </div>`;
    })
    

} catch (error) {
        console.log(error);
    }

};

getCats();




const search = document.querySelector(".search");

search.onkeyup = function (event){
    const searchValue = event.target.value.trim().toLowerCase();
}