import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, Button} from 'antd'

import CustomFormLayout from '../Components/Form'

const ArticlesDetialsView = (props) => {
    const [article, setArticle] = useState([])

    const articleID = props.match.params.articleID;
    useEffect(() => {
      axios.get(`http://127.0.0.1:8900/api/${articleID}`)
      .then( res=> {
          setArticle(res.data)
        //   console.log('data from the backend',article); 
      })
    }, [articleID])

    const handleDelete=(e)=>{
        // alert('are you sure you want to delete')
        axios.delete(`http://127.0.0.1:8900/api/${articleID}`)
        props.history.push('/')
    }
    return (
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <br/>
            <CustomFormLayout requestType='put' requestID={props.match.params.articleID}/>
            <br/>
            <br/>
            <form onSubmit={handleDelete}>
                <Button type='danger' htmlType='submit'>
                    Delete
                </Button>
            </form>
        </div>
    )
}

export default ArticlesDetialsView
