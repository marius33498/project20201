import { baseUrl } from "./api.js";

const featured = document.querySelector(".image");


async function getImage(){
    const response = await fetch (baseUrl + "products");
    const results = await response.json();

    const imageFeatured = results;

 
 results.forEach(function(featured1){

    

   if(featured1.featured === true){
    console.log(featured1.featured)
    featured.innerHTML += `<h3>Featured products</h3><img src="${featured1.image_url}" />`;
   }

  })
  
}
getImage();


