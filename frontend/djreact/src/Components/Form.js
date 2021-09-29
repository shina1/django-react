import React from 'react'
import { Button } from 'antd';
import axios from 'axios'





const CustomFormLayout = (props) => {
    const {requestType, requestID} = props
    function handleSubmit(e, requestType, requestID){
        e.preventDefault()
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const content = e.target.elements.content.value;
       switch (requestType) {
           case 'post':
               return axios.post('http://127.0.0.1:8900/api/',{
                    title,
                    description,
                    content  
                })
                .then(res => console.log(res)
                )
                .catch( err => console.error(err)
                )
           case 'put':
               return axios.put(`http://127.0.0.1:8900/api/${requestID}/`,{
                    title,
                    description,
                    content
                }).then(res => console.log(res)
                ).catch(err => console.error(err)
                )
       }
        
    }
    return (
           <div>
                <form onSubmit={(e)=> handleSubmit(e, requestType, requestID)}>
                    <input name='title' placeholder='Enter title'  />
                    <br/>
                    <br/>
                    <input name='description' placeholder='Enter title'  />
                    <br/>
                    <br/>
                    <textarea name='content'  />
                    <br/>
                    <br/>
                       <Button type="primary" htmlType='submit'>
                          Submit
                       </Button>
                </form>
                
           </div>
    )
}

export default CustomFormLayout














