import axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST } from '../constants/LoginConstants';

export const loginRequest=()=>{
    return {
        type: LOGIN_REQUEST
    }
}
export const loginSuccess=(token)=>{
    return{
        type: LOGIN_SUCCESS,
        token: token
    }
}
export const loginFail=(error)=>{
    return{
        type: LOGIN_FAIL,
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


export const LoginAction = (email, password)=>{
    
        return dispatch =>{
            dispatch(loginRequest())
            axios.post('http://127.0.0.1:8900/rest-auth/login', {
                email: email,
                password: password
            })
            .then( res => {
                const token = res.data.key
                const expDate = new Date(new Date().getTime() + 3600 * 2000)
                localStorage.setItem('token', JSON.stringify(token))
                localStorage.setItem('expDate', JSON.stringify(expDate))
                dispatch(loginSuccess(token))
                dispatch(checkAuthTimeout(3600))
            })
            .catch (error =>{
                dispatch(loginFail(error))
            })
        }
     
}

export const authCheckState = ()=>{
    const token = JSON.parse(localStorage.getItem('token'))
    

    return dispatch =>{
        if(token === undefined){
            dispatch(logout())
        }else{
            const expDate = new Date(JSON.parse(localStorage.getItem('expDate')))
            if(expDate <= new Date()){
                dispatch(logout())
            }else{
                dispatch(loginSuccess(token))
                dispatch(checkAuthTimeout((expDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}


