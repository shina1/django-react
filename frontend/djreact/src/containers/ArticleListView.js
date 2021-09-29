import React, {useState, useEffect} from 'react'
import Articles from '../Components/Articles'
import axios from 'axios' 

import CustomFormLayout from '../Components/Form'

const ArticleListView = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
      axios.get('http://127.0.0.1:8900/api/')
      .then( res=> {
          setArticles(res.data)
      })
    }, [])
    return (
        <div>
            <Articles data={articles}/>
            <br/>
            <h2>Create a New Article</h2>
            <CustomFormLayout requestType='post'/>
        </div>
    )
}

export default ArticleListView
