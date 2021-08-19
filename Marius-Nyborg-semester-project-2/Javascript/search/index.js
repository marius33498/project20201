
import { baseUrl } from "../api.js";


const url = "http://localhost:1337/products";

const resultsContainer = document.querySelector(".results");

const container = document.querySelector(".product-container");

const productsUrl = baseUrl + "products";

const search = document.querySelector(".search");

let products = [];

async function getAPI(){
    try{
        const response = await fetch(productsUrl);
           const results = await response.json();
    
    
        container.innerHTML = "";
    
        const facts = results;
    
console.log(facts);
      
    facts.forEach(function(facts) {
            container.innerHTML += `<div class="product"><div class="row"><div class="col-sm-8"><h3>Title: ${facts.title}</h3>
            <img src="${facts.image_url}"  class="w-100"><p>Price: ${facts.price}</p>  
           </div></div>
            </div>`;

        });

        search.onkeyup = function (event) {
            //console.log(event);
        
            const searchValue = event.target.value.trim().toLowerCase();
            
            const filteredTeams = facts
            .filter(function (filterMethod) {
              if (filterMethod.title.toLowerCase().startsWith(searchValue)) {
                return true;
              }
            })
            .map(function (item) {
              // logic here
            });
            
            
  
        };

    } catch (error) {
            console.log(error);
        }
    
};
                          

getAPI();




              /*
            const filteredTeams = facts.filter(function (filterMethod) {
                
                if (filterMethod.title.toLowerCase().startsWith(searchValue)) {
                    return true;
                }
            })
        
            .map(function (item) {
                // logic here
              });

            facts = filteredTeams;
        */
        


 



/*
search.onkeyup = function (){

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredTeams = teamsToRender.filter(function(filter){
        if (filter.title.toLowerCase().startsWith(searchValue)) {
            return true;
        }
    });
console.log(search);

teamsToRender = filteredTeams;    
    renderTeams();
}
*/