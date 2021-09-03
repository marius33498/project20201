export function getExistingFavs(){
    const shoes = localStorage.getItem("favourites");

    if (shoes === null){
        return [];
    }else{
        return JSON.parse(shoes);
    }

}