import { baseUrl } from "./api.js";
import { getExistingFavs } from "./data/localstorage.js";

const totalProducts = document.querySelector(".total b");


let favourites = getExistingFavs();

 
const cart = document.querySelector(".shoppingCart");

