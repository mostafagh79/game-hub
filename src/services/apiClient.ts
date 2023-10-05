import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params :{
        key : "c313cd8963c844908394e2e81cb3b90e"
    }
})