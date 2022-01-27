import http from "../http-common-interieur";

class ListInterieurDataService{
    getAll(page = 0){
        return http.get(`?page=${page}`);
    }

    get(id){
        return http.get(`/id/${id}`);
    }

    find(query, by = "name", page = 0){
        return http.get(`?${by}=${query}&page=${page}`);
    }

    createInfraction(data){
        return http.post("/listInterieur", data); 
    }

}

export default new ListInterieurDataService();