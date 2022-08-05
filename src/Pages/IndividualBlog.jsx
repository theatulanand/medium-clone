import { Avatar, Button } from '@mui/material';
import { width } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SideNavbar } from '../components/SideNavbar'
import share from "../Images/share.png"
import follow from "../Images/follow.png"
import more from "../Images/more.png"
import { useSpeechSynthesis } from 'react-speech-kit';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import bookmarkImg from "../Images/bookmark.png"

export const IndividualBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const { speak , cancel} = useSpeechSynthesis();
  const [listen, setListen] = useState(false);
  const [bookmark, setBookmark] = useState(false);


  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/blogs/${id}`
    }).then((res) => {
      setBlog(res.data);
      console.log(res.data);

      axios({
        method: "get",
        url: `http://localhost:8080/bookmarks/${id}`
      }).then(() => {
        setBookmark(true);
      })
    })
  }, [id])

  const handleListen = () =>{
    speak({ text: blog.content })
    setListen(!listen)
  }

  const handleBookmark = () => {
    
    axios({
      method: "post",
      url: `http://localhost:8080/bookmarks`,
      data: blog
    }).then(() => {
      setBookmark(!bookmark);
    })
  }

  const handleDelete = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/bookmarks/${id}`,
    }).then(() => {
      setBookmark(!bookmark);
    })
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <SideNavbar />
        </div>

        <div className="example" style={{ marginLeft: "150px", width: "120%", marginTop: "50px", paddingRight: "80px" , height: "1300px" , overflow: "scroll" }}>
          {
            <>
              <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                  <div>
                    <img style={{ width: "70px", height: "70px", borderRadius: "100px" }} src={blog.avatar} alt="img" />
                  </div>
                  <div>
                    <h3>{blog.author}</h3>
                    <p style={{ color: "gray", marginTop: "-20px" }}>Feb 14 ·5 min read</p>
                  </div>
                  {
                    !listen ? <PlayCircleFilledWhiteRoundedIcon style={{color: "blue", fontSize: "40px"}}  onClick={handleListen}/> : <PauseCircleFilledRoundedIcon style={{color: "blue", fontSize: "40px"}} onClick={() => {cancel(); setListen(!listen)}}/>
                  }
                  
                  
                </div>

                <div>
                  {
                    !bookmark ? <img onClick={() => handleBookmark()} src={share} alt="" /> : <img onClick={() => handleDelete(blog.id)} src={bookmarkImg} alt="" />
                  }
                 
                </div>

              </div>
              <div>
                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
              </div>
            </>
          }
        </div>

        <div style={{ borderLeft: "1px solid gray" }}>
          <div style={{ width: "100%", margin: "auto", marginTop: "50px" }}>
            <button style={{ fontSize: "12px", padding: "10px", paddingLeft: "80px", paddingRight: "80px", marginLeft: "30px", borderRadius: "30px", backgroundColor: "black", color: "white", cursor: "pointer" }}>Get unlimited access</button>
          </div>
          <div style={{ marginTop: "30px" }}>
            <input style={{ fontSize: "15px", padding: "10px", paddingLeft: "30px", paddingRight: "50px", marginLeft: "30px", borderRadius: "30px", cursor: "pointer" }} type="text" placeholder='Search' />
          </div>
          <div style={{ marginTop: "30px", marginLeft: "10%" }}>
            <img style={{ width: "100px", height: "100px", borderRadius: "100%" }} src={blog.avatar} alt="" />
            <h3>{blog.author}</h3>
            <p>Enthusiast Stock Market Analyst, Assertive Content Writer by passion, and Mechanical Engineer by profession.</p>
            <img src={follow} alt="" />
          </div>
          <div style={{ marginTop: "30px", marginLeft: "3%" }}>
            <h3>More from medium</h3>
            <img src={more} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
