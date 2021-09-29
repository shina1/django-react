// import {updateObj} from '../utils' 
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST } from '../constants/LoginConstants';


export const loginReducer = (state={token: null}, action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                loading: true 
            }
        case LOGIN_SUCCESS:
            return{
                loading: false,
                token: action.token
            }    
        case LOGIN_FAIL:
            return{
                loading:false,
                error: action.error,
            }
        case LOGOUT_REQUEST:
            return{}
        default:
            return{
                ...state
            }
    }
} 