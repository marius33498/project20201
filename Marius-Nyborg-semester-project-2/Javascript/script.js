import { baseUrl } from "./api.js";

const productsUrl = baseUrl + "products";
const container = document.querySelector(".product-container");

async function getCats(){

	try{
		const response = await fetch(productsUrl);
		const results = await response.json();

		container.innerHTML = "";

		const facts = results;


		facts.forEach(function(facts){
			container.innerHTML += `<div class="container-fluid"><div class="product-container"> 
			<div class="card"><h3>Our Products</h3><img src="${facts}" id="imageProduct"></div></div></div>`;
		});

	}catch (error) {
        console.log(error);
    }
};


getCats();

