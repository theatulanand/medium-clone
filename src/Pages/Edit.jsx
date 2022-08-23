import JoditEditor from 'jodit-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { SideNavbar } from '../components/SideNavbar'
import logo from "../Images/logo.png"
import bell from "../Images/bellicon.png"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {
    const user = useSelector(state => state.auth.userData);
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [title, setTitle] = useState();




    const postData = () => {
        const data = {
            author: user.name,
            title,
            avatar: user.imageUrl,
            thumbnail: "https://miro.medium.com/max/700/0*1EmecBFxPe1sFP1U",
            brief: "Today, our world is full of distractions. Because of that, we can’t focus, and our attention spans are lower than ever.Yes, I said it. Your attention span is low. In fact, the average human attention span is 7-seconds, which is lower than those of goldfish. Isn’t that just mind-blowing?",
            content,
            time: "8 August"
        }

        axios({
            method: "patch",
            url: `https://e-com-fake-server.herokuapp.com/blogs/${Number(id) + Number(12)}`,
            data
        }).then(() => {
            setTitle('');
            setContent('');
            alert("Blog Edited");

            axios({
                method: "patch",
                url: `https://e-com-fake-server.herokuapp.com/postedblogs/${id}`,
                data
            }).then(() => {
                return navigate("/stories");
            })
        })
    }

    useEffect(() => {
        axios({
            method: "get",
            url: `https://e-com-fake-server.herokuapp.com/postedBlogs/${id}`,
        }).then((res) => {
            setBlog(res.data);
            setTitle(res.data.title);
            setContent(res.data.content);
        })
    }, [id])


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
                                <button style={{ fontSize: "17px", border: "none", backgroundColor: "green", color: "white", padding: "5px", borderRadius: "20px", paddingLeft: "10px", paddingRight: "10px", cursor: "pointer" }} onClick={postData}>Update</button>
                            </div>
                            <img src={bell} alt="" />
                            <img style={{ width: "40px", borderRadius: "100px" }} src={user.imageUrl} alt="" />
                        </div>
                    </div>
                    <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Title' style={{ width: "1050px", fontSize: "40px", marginBottom: "10px", border: "none", padding: "20px" }} />
                </div>
                <JoditEditor value={content} onChange={(text) => setContent(text)} />
            </div>
        </div>
    )
}
