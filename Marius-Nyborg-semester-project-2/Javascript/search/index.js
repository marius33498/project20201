
import { baseUrl } from '../api.js';

const url = 'http://localhost:1337';

const resultsContainer = document.querySelector('.results');

const container = document.querySelector('.product-container');

const productsUrl = baseUrl + 'products';

const search = document.querySelector('.search');


let facts = [];
//from here we have the filter 
search.onkeyup = function (event) {
    //console.log(event);
  
    const searchValue = event.target.value.trim().toLowerCase();
    //console.log(facts);
    const filteredTeams = facts
      .filter(function (filterMethod) {
        
        if (filterMethod.title.toLowerCase().startsWith(searchValue)) {
          console.log('MATCH FOUND');
          return true;
        }
      })
    displayData(filteredTeams);
    
  };

//this line display the data
function displayData(data) {
  
    container.innerHTML = '';

  data.forEach(function (fact) {
    container.innerHTML += `<div class="product"><div class="row"><div class="col-sm-8"><h3>Title: ${fact.title}</h3>
          <img src="${fact.image_url}" ><p>Price: ${fact.price}</p>
         </div></div>
          </div>`;
  });
}

//this will get the data from my strapi
async function getData() {
  try {
    const response = await fetch('http://localhost:1337/products');
   
    const results = await response.json();
    const facts = results;
    
    return facts;
  } catch (error) {
    console.log(error);
  }
}

async function init() {
  facts = await getData();
  displayData(facts);
}

init();