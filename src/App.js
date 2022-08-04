import './App.css';
import {gapi} from 'gapi-script'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/gAuth/Login';
import Logout from './components/gAuth/Logout';
import Home from './components/Home_BL/Home';

const clientId = "779029402943-c8c6rrt9rkfpf60it2qqv31agcgq8i55.apps.googleusercontent.com"

function App() {
  const data = useSelector(state => state.auth.userData)
  console.log("data in store",data)
  

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };
    gapi.load('client:auth2' , start)
  } )
  return (
   <div>
    {/* <Login />
    <Logout />   */}
    <Home/>
   </div>
  );
}

export default App;
