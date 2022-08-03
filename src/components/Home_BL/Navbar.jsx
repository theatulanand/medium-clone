import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Login from '../gAuth/Login';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

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

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{ height: "70px", backgroundColor: "#ffc017", display: "flex", justifyContent: "space-around",position:"sticky",width:"100%",marginBottom:"10px",top:"0",right:"0"}}>
            <div style={{ marginRight: "300px" }}>
                <img src="https://i.ibb.co/8jW928K/medium-logo-removebg-preview.png" alt="medium-logo-removebg-preview" border="0" style={{ marginTop: "10px" }} />
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
                <p>Our Story</p>
                <p>Membership</p>
                <p>Write</p>
                <p style={{cursor: "pointer",}} onClick={handleOpen}>Sign in</p>
                <button onClick={handleOpen} style={{ cursor: "pointer", backgroundColor: "black", width: "120px", color: "white", borderRadius: "30px", height: "45px", marginTop: "10px", fontWeight: "bold" }}>
                    Get Started</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} style={{height:"90%", width:"35%",textAlign:"center",border:"1px solid #cecece"}} >
                        <br /><br /><br /><br />
                        <h1 style={{fontWeight:"400"}}>Join Medium.</h1>
                        <br /><br /><br />
                        <Typography  id="modal-modal-title" variant="h6" component="h2">
                            <Login />
                        </Typography>
                        <br />
                         <Typography  id="modal-modal-title" variant="h6" component="h2">
                            <button style={{padding:"2%",width:"70%",backgroundColor:"white",border:"1px solid #cecece",color:"grey",fontSize:"14px",textAlign:"left"}}><FacebookIcon color='primary'/>  Sign up with Facebook</button>
                        </Typography>
                        <br />
                         <Typography  id="modal-modal-title" variant="h6" component="h2">
                            <button style={{padding:"2%",width:"70%",backgroundColor:"white",border:"1px solid #cecece",color:"grey",fontSize:"14px",textAlign:"left"}}><EmailIcon/> Sign up with Email</button>
                        </Typography>
                        <br />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{color:"grey" , fontSize:"14px"}}>
                        Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you..
                        </Typography>
                    </Box>
                </Modal>
            </div>


        </div>

    )
}
export default Navbar