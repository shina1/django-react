import axios from 'axios'
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from '../constants/registerConstant';
import { LOGOUT_REQUEST } from '../constants/LoginConstants';




export const signupRequest=()=>{
    return {
        type: REGISTER_REQUEST
    }
}
export const signupSuccess=(token)=>{
    return{
        type: REGISTER_SUCCESS,
        token: token
    }
}
export const signupFail=(error)=>{
    return{
        type: REGISTER_FAIL,
        error
    }
}

export const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expDate')
    return{
        type:LOGOUT_REQUEST
    }
}
export const checkAuthTimeout = expTime =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expTime * 2000);
    }
}

export const SignupAction = async(firstname,lastname,email, password, confirmPass)=>{
    try {
        return dispatch =>{
            dispatch(signupReques())
            axios.post('http://127.0.0.1:8900/rest-auth/signup', {
                firstname: firstname,
                lastname:lastname,
                email:email,
                password: password,
                confirmPass:confirmPass,
            })
            .then( res => {
                const key = res.data.key
                const expDate = new Date(new Date().getTime() + 3600 * 2000)
                localStorage.setItem('token', token)
                localStorage.setItem('expDate', expDate)
                dispatch(signupSuccess(key))
                dispatch(checkAuthTimeout(3600))
            })
        }
    } catch (error) {
        dispatch(signupFail())
    }
}