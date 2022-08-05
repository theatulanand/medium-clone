import React from "react";
import Avatar from '@mui/material/Avatar';
import "../Components/imageCard.css"
export const ImageCard =()=>{
    return(
        <>
         <div style={{display:"grid" , gap:"20px",gridTemplateColumns:"repeat(3,1fr) ",padding:"10px"}}>
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Erica_Dhawan_clip.png" sx={{ width: 52, height: 52}} / > 
            <h3 className="img_heading">Erica Dhawan</h3>
           </div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/DevonPrice_1DevonPrice.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">Devon Price</h3>
           </div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-03_1tri-col-item-03.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">GEN</h3>
           </div>
           
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>

            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-04_1tri-col-item-04.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">Scott Galloway</h3>
           </div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/KakiOkumura_1KakiOkumura.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">Kaki Okumura</h3>
           </div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Hal_Harris_clip.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">Hal H. Harris</h3>
           </div>
           
           <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>

            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-07_1tri-col-item-07.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">One Zero</h3>
           </div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/CarvellWallace_1CarvellWallace.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">Carvell Wallace</h3>
           </div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-09_1tri-col-item-09.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">Elemental</h3>
           </div>

           <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/SarahCottrell_1SarahCottrell.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">Sarah Cottrel</h3>
           </div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-11_1tri-col-item-11.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">Forge</h3>
           </div>
            <div style={{display:"flex"}}>
            <Avatar alt="Remy Sharp" src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Level_1Level.png" sx={{ width: 52, height: 52 }} / > 
            <h3 className="img_heading">LEVEL</h3>
           </div>
 
           <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>
            <div style={{borderTop:"1px solid black " ,}} ></div>
         </div>
        </>
    )
}