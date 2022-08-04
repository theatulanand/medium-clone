import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/Auth/action'
import './Login.css'

export default function Login() {

  const clientId = "779029402943-c8c6rrt9rkfpf60it2qqv31agcgq8i55.apps.googleusercontent.com"
  const dispatch = useDispatch()

  const onLoginSuccess = (response) => {
    console.log("loginSuccess",response.profileObj);
    dispatch(login(response.profileObj))
  }
  const onFailureSuccess = (response) =>{
    console.log("fail sucess" , response)
   
  }

  return (
    <div>
        <GoogleLogin
        className='g_login'
        clientId={clientId}
        buttonText="Sign up with Google"
        onSuccess={onLoginSuccess}
        onFailure={onFailureSuccess}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}