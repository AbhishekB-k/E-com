import * as types from "./ActionType"

const initialstate = {
    isLogin:false,
    isLoading:false,
    isError:false,
    products:[],
    token:"",
} 

export const Reducer = (state=initialstate,action)=>{
    const {type,payload} = action;

    switch(type){
        case types.LOGIN_REQUEST:{
            return {
                ...state,isLoading:true,isError:false,
            }
        }

        case types.LOGIN_FAILURE:{
            return{
                ...state,isLoading:false,isError:true,isLogin:false
            }
        }
        case types.LOGIN_SUCCESS:{
            return{
                ...state,isLoading:false,isError:false,isLogin:true,token:payload
            }
        }
        case types.SIGNUP_REQUEST:{
            return {
                ...state,isLoading:true,isError:false,
            }
        }

        case types.SIGNUP_FAILURE:{
            return{
                ...state,isLoading:false,isError:true,isLogin:false
            }
        }
        case types.SIGNUP_SUCCESS:{
            return{
                ...state,isLoading:false,isError:false,isLogin:true,token:payload
            }
        }
    }
}