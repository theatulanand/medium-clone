import React, { useState } from 'react'
import './Payment.css'
import CheckIcon from '@mui/icons-material/Check';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import Gpay from './Gpay';

const Payment = () => {
    const [clicked,setClicked] = useState("")
    return (
        <div className='payment_container'>
            <img src="https://i.ibb.co/8jW928K/medium-logo-removebg-preview.png" alt="medium-logo-removebg-preview" border="0" style={{ marginTop: "10px" }} />
            <h1>Get unlimited access to <br /> everything on Medium</h1>
            <br />
            <h3>Plans starting at less than $1/week. Cancel anytime.</h3>
            <p><CheckIcon color='success' /> No ads</p>
            <p><CheckIcon color='success' /> Support quality writing</p>
            <p><CheckIcon color='success' /> Access on any device</p>

            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                color='success'
            >
            <div className='select_Button_Payment'>
                <FormControlLabel value="monthly" onClick={(e) => setClicked(e.target.value)} control={<Radio color='success'/>} />
                <div style={{ textAlign: "left", height: "100%" }}>
                    <h4>Monthly<p style={{ fontWeight: "100" }}>$5 USD/month</p></h4>
                </div>
            </div>
            <br />
            <div className='select_Button_Payment'>
                <FormControlLabel  value="annualy" onClick={(e) => setClicked(e.target.value)} control={<Radio color='success'/>} />
                <div style={{ textAlign: "left", height: "100%" }}>
                    <h4>Annual<p style={{ fontWeight: "100" }}>$50 USD/year (save $10)</p></h4>
                </div>
            </div>
            </RadioGroup>
            <br />
            <br />
            {
                clicked?<>
                <div style={{display:"flex",justifyContent:"space-between",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",padding:"20px"}}>
                <h2 style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Total billed today</h2>
                <h2 style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>${((clicked == 'monthly')?5:50)} USD</h2>
            </div>
            <div className='payment_detail_container'>
                <h4 style={{fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"}}>Pay with</h4>
                <div style={{display:"flex",justifyContent:"space-around",padding:"20px"}}>
                <Gpay/>
                <button style={{backgroundColor:"blue",color:"white",width:"40%",height:"40px",border:"1px solid #cecece",borderRadius:"7px",fontSize:"20px",fontWeight:"bold"}}>
                    PayPal</button>
                </div>
            </div>
                </>:null
            }
        </div>


    )
}

export default Payment
