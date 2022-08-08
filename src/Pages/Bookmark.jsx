import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SideNavbar } from '../components/SideNavbar'
import header from "../Images/header.png"
import { Link } from "react-router-dom"
import reading from "../Images/reading.png"
import whotofollow  from '../Images/whotofollow.png'

export const Bookmark = () => {
  const [data, setData] = useState([])
  const [isloading, setLoading] = useState(true)


  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = () => {
    setLoading(true)
    fetch(`http://localhost:8080/bookmarks?_sort=id&_order=desc`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false)
      })
  }
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (
    <div style={{ display: "flex" }}>
      <div><SideNavbar /></div>
      <div className ="example" style={{ marginLeft: "150px", width: "70%", height: "1300px" , overflow: "scroll" }}>
        <h1 style={{color: "red"}}>Bookmarks</h1>
        <hr/>
        {
          data.map((el) => (

            <Link to={`/blogs/${el.id}`}>
              <div key={el.id} style={{ cursor: "pointer", display: "grid", gridTemplateColumns: "2fr 1fr", marginTop: "50px" }}>
                <div>
                  <div style={{ display: "flex" }}>
                    <Avatar alt="Remy Sharp" src={el.avatar} /> <h5 style={{ marginTop: "12px", marginLeft: "5px" }}>{el.author}</h5>
                  </div>
                  <div>
                    <h3>{el.title}</h3>
                  </div>
                  <div>
                    <p style={{ color: "gray" }}>{el.brief}</p>
                  </div>
                  <div className='post-details-div' style={{ color: "grey" }}>
                    <span>{el.time ? el.time :  <>{Math.floor(Math.random() * 31) + 1} {months[Math.floor(Math.random() * months.length)]}</>} </span>
                    <span>{Math.floor(Math.random() * 10) + 1} min read</span>
                  </div>
                </div>
                <div>
                  <img style={{ width: "180px", height: "130px", marginTop: "70px", marginLeft: "20px" }} src={el.thumbnail} alt="thumbnail" />
                </div>
              </div>
            </Link>

          ))
        }
      </div>
      <div>
        <div style={{ borderLeft: "1px solid gray", height: "100%", position: "sticky" }}>
          <div style={{ width: "100%", margin: "auto", marginTop: "50px" }}>
          <Link to="/premium"><button style={{ fontSize: "12px", padding: "10px", paddingLeft: "80px", paddingRight: "80px", marginLeft: "30px", borderRadius: "30px", backgroundColor: "black", color: "white", cursor: "pointer" }}>Get unlimited access</button></Link>
          </div>
          <div style={{ marginTop: "30px" }}>
            <input style={{ fontSize: "15px", padding: "10px", paddingLeft: "30px", paddingRight: "50px", marginLeft: "30px", borderRadius: "30px", cursor: "pointer" }} type="text" placeholder='Search' />
          </div>
          <div style={{ marginTop: "30px" }}>
            <img src={reading} alt="" />
          </div>
          <div style={{marginLeft: "30px"}}>
            <img src={whotofollow} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
