import React from 'react'
import {Button} from 'antd'

const Login = () => {
    return (
        <div className='app-container'>
            <p>Welcome Back</p>
            <form>
                <input type='email' placeholder='Enter your username' name='email'/>
                <br/>
                <br/>
                <input type='password' placeholder='Enter your password' name='password'/>
                <br/>
                <br/>
                <Button type='primary' htmlType='submit'> Login</Button>
            </form>

        </div>
    )
}

export default Login
