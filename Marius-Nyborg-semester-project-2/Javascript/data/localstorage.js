export function getExistingFavs(){
    const favs = localStorage.getItem("button");

    if (favs === null){
        return [];
    }else{
        return JSON.parse(favs);
    }

}