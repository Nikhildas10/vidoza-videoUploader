import axios from "axios";

export const request=async(method,url,data)=>{
let config={
    method:method,
    url:url,
    data:data
}
return await axios(config).then(data=>{
    return data
}).catch(error=>{
    return error
})
}

