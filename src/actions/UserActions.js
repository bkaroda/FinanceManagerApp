import { saveUser } from "../services/UserService"
import { USER_SIGNUP } from "./Type";

export const userSignup=(user)=>async(dispatch)=>{
      try {
       const response=await saveUser(user);
       dispatch({
        type:USER_SIGNUP,
        payload:response.data
       });
       return Promise.resolve(response.data)

      } catch (error) {
        console.log(error);
        return Promise.reject(error)
      }
}