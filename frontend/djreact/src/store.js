import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {loginReducer} from './store/reducers/authReducer'


const reducers = combineReducers({
    userLogin:loginReducer
})

const userTokenFromLS = JSON.parse(localStorage.getItem('token'))


const initialState = {
    userLogin: {
        token : userTokenFromLS
    }
}



const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))
export default store