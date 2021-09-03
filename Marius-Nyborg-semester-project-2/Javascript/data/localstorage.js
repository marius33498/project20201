export function getExistingFavs(){
    const shoes = localStorage.getItem("shoe");

    if (shoes === null){
        return [];
    }else{
        return JSON.parse(shoes);
    }

}