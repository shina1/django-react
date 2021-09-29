import React,{useEffect} from 'react'
import {BrowserRouter as Router,  Switch,Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import CustomLayout from './containers/Layout'
import ArticleList from './containers/ArticleListView'
import ArticlesDetialsView from './containers/ArticlesDetialsView';
import CustomForm from './Components/Form'
import Login from './Components/Login'
import {authCheckState} from './store/actions/loginaction'
// import Text from './Components/Text'

const App = () => {
  const userLogin = useSelector(state => state.userLogin)
  const {token}= userLogin; 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authCheckState())
  }, [authCheckState])
  return (
   <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
      <Route exact path='/new' component={CustomForm} /> 
      <CustomLayout token={token}>
          <Route exact path='/' component={ArticleList}/>
          <Route exact path='/:articleID' component={ArticlesDetialsView}/>
      </CustomLayout>
    </Switch>
   </Router>
  )
}


export default App