import { Avatar, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SideNavbar } from '../components/SideNavbar'
import header from "../Images/yourstories.png"
import { Link, useNavigate } from "react-router-dom"
import reading from "../Images/reading.png"
import whotofollow from '../Images/whotofollow.png'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import more from "../Images/more.png"
import { useSelector } from 'react-redux'

export const Blogs = () => {
    const [data, setData] = useState([])
    const [isloading, setLoading] = useState(true);
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.userData);


    useEffect(() => {
        handleFetch()
    }, [])

    const handleFetch = () => {
        setLoading(true)
        fetch(`https://e-com-fake-server.herokuapp.com/postedBlogs?_sort=id&_order=desc`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false)
            })
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleDelete = (id) => {
        axios.delete(`https://e-com-fake-server.herokuapp.com/postedBlogs/${id}`).then(() => {
            axios.delete(`https://e-com-fake-server.herokuapp.com/blogs/${id + 12}`);
            handleFetch()
        })
    }
    return (
        <div style={{ display: "flex" }}>
            <div><SideNavbar /></div>
            <div className="example" style={{ marginLeft: "150px", width: "110%", height: "1300px", overflow: "scroll" }}>
                <Link to="/create"><img src={header} /></Link>
                {
                    data.length === 0 ?
                        <div style={{ width: "100%", marginTop: "200px", textAlign: "center" }}>
                            <Link to="/create"><Button variant='contained' color="success">Write a Story</Button></Link>
                        </div>
                        :
                        <>
                            {
                                data.map((el) => (
                                    <div key={el.id} style={{ cursor: "pointer", display: "grid", gridTemplateColumns: "2fr 1fr", marginTop: "50px" }}>
                                        <div>
                                            <div style={{ display: "flex" }}>
                                                <Avatar alt="Remy Sharp" src={el.avatar} />
                                                <h4 style={{ marginTop: "12px", marginLeft: "5px" }}>{el.author}</h4>
                                                <div style={{ marginLeft: "10px", paddingTop: "15px", color: "green" }}><Link to={`/edit/${el.id}`}><EditIcon style={{ fontSize: "18px" }} /></Link></div>
                                                <div style={{ marginLeft: "10px", paddingTop: "15px", color: "red" }}><DeleteIcon onClick={() => handleDelete(el.id)} style={{ fontSize: "18px" }} /></div>
                                            </div>
                                            <Link to={`/blogs/${el.id + 12}`}>
                                                <div>
                                                    <div>
                                                        <h3>{el.title}</h3>
                                                    </div>
                                                    <div>
                                                        <p style={{ color: "gray" }}>{el.brief}</p>
                                                    </div>
                                                </div>

                                            </Link>


                                            <div className='post-details-div' style={{ color: "grey" }}>
                                                <span>{el.time ? el.time : <>{Math.floor(Math.random() * 31) + 1} {months[Math.floor(Math.random() * months.length)]}</>} </span>
                                                <span>{Math.floor(Math.random() * 10) + 1} min read</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img style={{ width: "180px", height: "130px", marginTop: "70px", marginLeft: "20px" }} src={el.thumbnail} alt="thumbnail" />
                                        </div>
                                    </div>


                                ))
                            }
                        </>

                }

            </div>

            <div style={{ borderLeft: "1px solid gray" }}>
                <div style={{ width: "100%", margin: "auto", marginTop: "50px" }}>
                    <Link to="/premium"><button style={{ fontSize: "12px", padding: "10px", paddingLeft: "80px", paddingRight: "80px", marginLeft: "30px", borderRadius: "30px", backgroundColor: "black", color: "white", cursor: "pointer" }}>Get unlimited access</button></Link>
                </div>
                <div style={{ marginTop: "30px" }}>
                    <input style={{ fontSize: "15px", padding: "10px", paddingLeft: "30px", paddingRight: "50px", marginLeft: "30px", borderRadius: "30px", cursor: "pointer" }} type="text" placeholder='Search' />
                </div>
                <div style={{ marginTop: "30px", marginLeft: "10%" }}>
                    <img style={{ width: "100px", height: "100px", borderRadius: "100%" }} src={user.imageUrl} alt="" />
                    <h3>{user.name}</h3>
                    <p>Aspiring Full Stack Web Developer</p>
                </div>
                <div style={{ marginTop: "30px", marginLeft: "3%" }}>
                    <h3>More from medium</h3>
                    <img src={more} alt="" />
                </div>
            </div>
        </div >
    )
}
