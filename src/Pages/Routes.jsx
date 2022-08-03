import React from 'react'
import Home from '../components/Home_BL/Home';
import {Home as Home_AL } from "../Pages/Home";
import { useSelector } from 'react-redux';

export const Routes = () => {
    const data = useSelector(state => state.auth.userData);
  return (
    <>{
        !data ? <Home/> : <Home_AL/>
    }
    </>
  )
}
