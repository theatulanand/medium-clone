import React, { useState } from 'react'
import Navbar from './Navbar'
import './HomeBL.css'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Login from '../gAuth/Login';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import { Avatar, Skeleton } from '@mui/material';
import { useEffect } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([])
  const [isloading, setLoading] = useState(true)


  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = () => {
    setLoading(true)
    fetch(`http://localhost:8080/blogs`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false)
      })
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div>
      <div style={{ backgroundColor: "#ffc017" }}>
        <Navbar />
        <div className='Home_BL_Banner' style={{ marginTop: "10px" }}>
          <div style={{ paddingLeft: '120px' }}>
            <h1 style={{ fontSize: "100px", fontWeight: "500" }}>Stay curious.</h1>
            <p style={{ fontSize: "30px", fontWeight: "500", color: "black" }}>
              Discover stories, thinking, and expertise
              <br />
              from writers on any topic.
            </p>
            <br />
            <button onClick={handleOpen} style={{ cursor: "pointer", fontSize: "20px", backgroundColor: "black", color: "white", borderRadius: "30px", height: "45px", width: "200px" }}>
              Start Reading </button>
          </div>
          <div className='mmm'>
            <img src="./mm.png" alt="" />
          </div>

        </div>

      </div>

      <div className='trending_home'>
        <img src="./trending.png" alt="trendingImg" />
      </div>
      <hr />


      <div className='home_bl_bottom'>
        <div>
          {
            isloading ? <>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={118} />
            </> :
              data.map((el) => (
                <div key= {el.id} style={{ cursor: "pointer", display: "grid", gridTemplateColumns: "2fr 1fr", marginTop: "50px" }}>
                  <div>
                    <div style={{ display: "flex" }}>
                      <Avatar alt="Remy Sharp" src={el.avatar} /> <h5 style={{ marginTop: "12px", marginLeft: "5px" }}>{el.author}</h5>
                    </div>
                    <div>
                      <h3>{el.title}</h3>
                    </div>
                    <div className='post-details-div' style={{ color: "grey" }}>
                      <span>{Math.floor(Math.random() * 31) + 1} {months[Math.floor(Math.random() * months.length)]} </span>
                      <span>{Math.floor(Math.random() * 10) + 1} min read</span>
                    </div>
                  </div>
                  <div>
                    <img style={{ width: "180px", height: "130px" }} src={el.thumbnail} alt="thumbnail" />
                  </div>
                </div>
              ))
          }
        </div>
        <div>
          <div className="discover">
            <div >
              <h4>DISCOVER MORE OF WHAT MATTERS TO YOU</h4>

              <div className="explore">
                <button>Self</button>
                <button>Relationships</button>
                <button>Data Science</button>
                <button>Programming</button>
                <button>Productivity</button>
                <button>Javascript</button>
                <button>Development</button>
                <button>Politics</button>
                <button>Health</button>
              </div>

              <div style={{ width: '100%', gap: '15px' }} className="info">
                <p>Help</p>
                <p>Status</p>
                <p>Writers</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>About</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ height: "90%", width: "35%", textAlign: "center", border: "1px solid #cecece" }} >
          <br /><br /><br /><br />
          <h1 style={{ fontWeight: "400" }}>Join Medium.</h1>
          <br /><br /><br />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Login />
          </Typography>
          <br />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <button style={{ padding: "2%", width: "70%", backgroundColor: "white", border: "1px solid #cecece", color: "grey", fontSize: "14px", textAlign: "left" }}><FacebookIcon color='primary' /> Sign up with Facebook</button>
          </Typography>
          <br />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <button style={{ padding: "2%", width: "70%", backgroundColor: "white", border: "1px solid #cecece", color: "grey", fontSize: "14px", textAlign: "left" }}><EmailIcon /> Sign up with Email</button>
          </Typography>
          <br />
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: "grey", fontSize: "14px" }}>
            Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you..
          </Typography>
        </Box>
      </Modal>
    </div>

  )
}

export default Home
