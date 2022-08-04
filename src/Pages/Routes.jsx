import React from 'react'
import Home from '../components/Home_BL/Home';
import { Home as Home_AL } from "../Pages/Home";
import { useSelector } from 'react-redux';
import { Route, Routes as Routing } from 'react-router-dom';
import { IndividualBlog } from './IndividualBlog';
import { Private } from './Private';


export const Routes = () => {
  const data = useSelector(state => state.auth.userData);
  return (
    <>{
      
        <Routing>
          <Route path="/" element={!data ? <Home /> : <Home_AL />}></Route>
          <Route path="/blogs/:id" element={<Private><IndividualBlog/></Private>}> </Route>
        </Routing>
      
    }
    </>
  )
}
