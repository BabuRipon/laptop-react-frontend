import axios from "axios"

export const userCart=async(cart,authToken)=>{
   return await axios.post(`${process.env.REACT_APP_BACKEND_API}/user/cart`,{cart},{
    headers:{
        token:authToken
    }
});
}

export const getUserCart=async(authToken)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API}/user/cart`,{
     headers:{
         token:authToken
     }
 });
 }