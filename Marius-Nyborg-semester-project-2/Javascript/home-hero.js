import { baseUrl } from "./api.js";
import { getExistingFavs } from "../Javascript/data/localstorage.js";


const hero = document.querySelector(".home-hero");


async function getHero(){
    const response = await fetch (baseUrl + "home");
    const results = await response.json();


    const url = "http://localhost:1337/uploads/photo_1544085311_11a028465b03_29d7651dcc.jpeg";


    const facts = results;

     

      hero.innerHTML += `<div class="home-hero" style="background-image: url(${url});>  
      background-image: url"${url}"<div class="hero-text">  <h1 class="hero-text-h1">Welcome to Shoe Shop</h1>
      <h3 class="hero-text-h3">Want to see more products?</h3>
      <button class="hero-text-button">Click here</button></div></div>`;

      
}



getHero();





