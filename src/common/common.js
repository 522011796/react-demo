import axios from "axios/index";

export function getSession(){
    axios.get('/sessionInfo').then(result => {
        console.log(result.data);
        return result;
    });
}