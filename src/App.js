import './App.css';
import {gapi} from 'gapi-script'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/gAuth/Login';
import Logout from './components/gAuth/Logout';
import Home from './components/Home_BL/Home';
<<<<<<< HEAD
import Payment from './components/payment/Payment'
import Profile from './components/profile/Profile'
import {Routes,Route} from 'react-router-dom'
=======
import { HomePostPage } from './pages/HomePostPage';
>>>>>>> d07e1aa8fe39703b36cdbf671907d7e4aa63ddcc

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
<<<<<<< HEAD
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
=======
    {/* <Login />
    <Logout />   */}
    {/* <Home/> */}
    <HomePostPage />
>>>>>>> d07e1aa8fe39703b36cdbf671907d7e4aa63ddcc
   </div>
  );
}

export default App;
