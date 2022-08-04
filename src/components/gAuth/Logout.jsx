import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/Auth/action'
import './Login.css'


const Logout = () => {
    const clientId = "779029402943-c8c6rrt9rkfpf60it2qqv31agcgq8i55.apps.googleusercontent.com"
    const dispatch = useDispatch()
    const data = useSelector(state => state.auth.userData)
    const onSignoutSuccess = () => {
        alert("You have been signed out")
        dispatch(logout())
    }
    return (
        <div>
            <GoogleLogout
                className='g_logout'
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSignoutSuccess}
            >
            </GoogleLogout>
        </div>
    )
}

export default Logout
