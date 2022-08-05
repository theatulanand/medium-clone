import JoditEditor from 'jodit-react'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { SideNavbar } from '../components/SideNavbar'
import logo from "../Images/logo.png"
import bell from "../Images/bellicon.png"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export const Create = () => {
    const user = useSelector(state => state.auth.userData);
    const [content, setContent] = useState('');
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const navigate = useNavigate()

    const postData = () => {
        const data = {
            author: user.name,
            title,
            avatar: user.imageUrl,
            thumbnail: "https://miro.medium.com/max/1400/0*-vJzXyULgTy9aEJj",
            brief: title + title,
            content
        }

        axios({
            method: "post",
            url: `http://localhost:8080/blogs`,
            data
        }).then(() => {
            setTitle('');
            setContent('');
            alert("Blog Posted");

            axios({
                method: "post",
                url: `http://localhost:8080/postedblogs`,
                data
            }).then(() => {
                return navigate("/");
            })
        })
    }


    return (
        <div style={{ display: "flex", gap: "30px" }}>
            <div><SideNavbar /></div>
            <div style={{ marginLeft: "150px", marginTop: "30px", width: "1100px" }}>
                <div></div>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex" }}>
                            <img src={logo} alt="" />
                            <p style={{ color: "gray" }}>Draft in {user.name}</p>
                        </div>
                        <div style={{ alignItems: "center", display: "flex" }}>
                            <div>
                                <button style={{ fontSize: "17px", border: "none", backgroundColor: "green", color: "white", padding: "5px", borderRadius: "20px", paddingLeft: "10px", paddingRight: "10px", cursor: "pointer" }} onClick={postData}>Publish</button>
                            </div>
                            <img src={bell} alt="" />
                            <img style={{ width: "40px", borderRadius: "100px" }} src={user.imageUrl} alt="" />
                        </div>
                    </div>
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder='Title' style={{ width: "1050px", fontSize: "40px", marginBottom: "10px", border: "none", padding: "20px" }} />
                </div>
                <JoditEditor ref={editor} onChange={(text) => setContent(text)} />
            </div>
        </div>
    )
}