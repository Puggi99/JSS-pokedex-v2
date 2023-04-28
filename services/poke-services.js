class PokeService{
   
    static PAGE_COUNT = 20;  

    static BASE_URL = 'https://pokeapi.co/api/v2/'
    

    static getPage(index){
        const url = this.BASE_URL + '/pokemon?limit=' 
                                  + this.PAGE_COUNT
                                  + '&offset='
                                  + (this.PAGE_COUNT * index);

        return fetch(url).then(resp => resp.json())
    }
}