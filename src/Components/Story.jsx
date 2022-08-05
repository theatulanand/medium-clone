import React from "react";
import "../Components/story.css"
import { ImageCard } from "./ImageCard";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"


export const Story = () => {
    return (
        <>
            <div style={{ width: "80%", margin: "auto", }}>
                <h1 className="top_heading">Every idea needs a <b>Medium.</b></h1>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "0.5px solid black", borderBottom: "0.5px solid black" }}>
                <div style={{ width: "90%", margin: "auto", paddingLeft: "80px" }}>
                    <p className="lft_content">The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.</p>
                    <p className="lft_content">
                        We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.</p>
                </div>
                <div style={{ width: "0px", margin: "auto", border: "0.5px solid black", height: "600px" }} > </div>
                <div  >
                    <iframe src="  https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1" width="100%" height="100%" positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
            <div style={{ backgroundColor: "#ffd1b9" }}>


                <div style={{ width: "95%", margin: "auto", backgroundColor: "#ffd1b9", paddingTop: "10px", paddingBottom: "40px" }}>

                    <div style={{ width: "50%", margin: "auto" }}>
                        <h1 className="mid_heading"> A living network of <br style={{ color: "red" }} /> curious minds.</h1>
                        <p className="mid_content" >Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</p>
                    </div>
                    <ImageCard />
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", borderBottom: "1px solid white" }} >
                <Box
                    sx={{
                        width: 758,
                        height: 580,
                        backgroundColor: '#000',

                    }}
                >
                    <Typography variant="h1" component="h1" sx={{ fontSize: "8rem", marginLeft: "18px", color: "white", fontFamily: "Soehne web buch sans-serif", lineHeight: "8rem", marginTop: "30px" }}>
                        Over 100 <br /> million <br />readers and <br /> growing.
                    </Typography>;
                </Box>

                <Box
                    sx={{
                        width: 760,
                        height: 580,
                        backgroundColor: '#000',


                    }}
                >
                    <Typography variant="h1" component="h2" sx={{ width: "80%", margin: "auto", marginTop: "100px" }}>
                        <Stack direction="row" spacing={3}>

                            <Avatar alt="l"
                                src="https://cdn-static-1.medium.com/sites/medium.com/about/images/About_Bina-1.png"
                                sx={{ width: 100, height: 100, }}
                            />
                            <Avatar
                                alt=""
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/AX63RGRNAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
                                sx={{ width: 60, height: 100 }}
                            />
                            <Avatar
                                alt=""
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ska6VuIeuI18K2gqWxg95btJnPtrpw-hDA&usqp=CAU"
                                sx={{ width: 50, height: 90 }}
                            />
                        </Stack>


                    </Typography>;
                    <Typography sx={{ color: "white", width: "70%", fontSize: "25px", marginLeft: "20px", fontFamily: "sans-serif" }}>"There’s no other place that combines such an excellent level of writing with a truly engaged and active community. Medium is truly where ideas are born, shared, and spread."</Typography>
                    <br />
                    <br />
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "sans-serif", marginLeft: "20px" }}>Jasmine Bina</Typography>
                </Box>
            </div>
            <Box
                sx={{
                    width: "100%",
                    height: 500,
                    backgroundColor: "black",
                    textAlign: "center"


                }}
            >
                <br />
                <Typography variant="h1" sx={{ color: "white", width: "70%", margin: "auto", textAlign: "center", fontFamily: "Soehne web buch sans-serif", lineHeight: "6rem" }}>
                    Create the space for your thinking to take off.
                </Typography>
                <Typography variant="h6" sx={{ color: "white", width: "60%", margin: "auto", marginTop: "30px", textAlign: "center", fontFamily: "Soehne web buch sans-serif", fontSize: "1.5rem" }}>
                    A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.
                </Typography>
                <br />
                <br />
                <br />
                <Link to="#">
                    <button className="write_btn">Write On Medium</button>
                </Link>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: 500,
                    backgroundColor: "#34a245",
                    textAlign: "center"


                }}
            >
                <br />
                <Typography variant="h1" sx={{ color: "black", width: "60%", margin: "auto", textAlign: "center", fontFamily: "Soehne web buch sans-serif", lineHeight: "5rem", }}>
                    Get more with membership.
                </Typography>
                <Typography variant="h6" sx={{ color: "black", width: "50%", margin: "auto", marginTop: "30px", textAlign: "center", fontFamily: "Soehne web buch sans-serif", fontSize: "1.5rem" }}>
                    Become a Medium member to enjoy unlimited access and directly support the writers you read most.
                </Typography>
                <br />
                <br />
                <br />

                <Link to="#">
                    {/* sign in link */}
                    <button className="membership_btn">See membership options</button>
                </Link>
            </Box>
            <div style={{ backgroundColor: "black" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", borderBottom: "1px solid black", borderTop: " 1px solid black" }} >
                    <Box
                        sx={{
                            width: 758,
                            height: 400,
                            backgroundColor: '#34a245',

                        }}
                    >
                        <Typography variant="h2" sx={{ color: "black", width: "100%", margin: "auto", textAlign: "center", fontFamily: "Soehne web buch sans-serif", lineHeight: "5rem", }}>
                            Read as much as you want.
                        </Typography>


                        <Box
                            sx={{
                                width: "85%",
                                height: 160,
                                backgroundColor: '#34a245',
                                margin: "auto",

                                marginTop: "20px"
                            }}
                        >

                            <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/UnlimitedReading.svg" alt="" />
                        </Box>

                        <Typography variant="h6" sx={{ color: "black", width: "90%", margin: "auto", fontFamily: "Soehne web buch sans-serif", }}>
                            Enjoy unlimited access to every story across all of your devices.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: 760,
                            height: 400,
                            backgroundColor: '#34a245',


                        }}
                    >
                        <Typography variant="h2" sx={{ color: "black", width: "100%", margin: "auto", textAlign: "center", fontFamily: "Soehne web buch sans-serif", lineHeight: "5rem", }}>
                            Reward quality content
                        </Typography>


                        <Box
                            sx={{
                                width: "85%",
                                height: 150,
                                backgroundColor: '#34a245',
                                margin: "auto",

                                marginTop: "20px"
                            }}
                        >

                            <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/SupportWriters.svg" alt="" />
                        </Box>


                        <Typography variant="h6" sx={{ color: "black", width: "90%", margin: "auto", textAlign: "center", fontFamily: "Soehne web buch sans-serif", lineHeight: "5rem", }}>

                            Your membership helps us pay writers, and keeps your experience ad-free.
                        </Typography>
                    </Box>
                </div>
            </div>


            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", borderBottom: "1px solid black" }} >
                <Box
                    sx={{
                        width: "100%",
                        height: 390,
                        backgroundColor: '#b6e5a4',
                        margin: "auto",


                    }}
                >

                    <Typography variant="h1" sx={{ color: "black", width: "70%", margin: "auto", fontFamily: "Soehne web buch sans-serif", lineHeight: "5rem", marginTop: "40px" }}>

                        Take Medium with you.
                    </Typography>
                    <p style={{ marginLeft: "40px", color: "black", fontFamily: "Soehne web buch sans-serif", fontWeight: "800", fontSize: "1.5rem" }}>Download our app so you can read wherever you <br /> are.</p>
                    <Box
                        sx={{
                            width: "80%",
                            margin: "auto"
                        }}
                    >

                        <Stack direction="row" spacing={3} >
                            <a href="https://apps.apple.com/us/app/medium/id828256236" target="-">
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/AppleStore_2x.png" alt="" />
                            </a>

                            <a href="https://play.google.com/store/apps/details?id=com.medium.reader&hl=en_US" target="-">
                                <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/PlayStore_2x.png" alt="" />
                            </a>




                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        height: 390,
                        backgroundColor: '#b6e5a4',
                        margin: "auto",


                    }}
                >

                    <Box
                        sx={{
                            width: "60%",
                            height: 250,
                            backgroundColor: '#b6e5a4',
                            margin: "auto",

                            marginTop: "20px"
                        }}
                    >

                        <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/creator-find-points-iphones.png" alt="" style={{ width: "400px", height: "148%" }} />
                    </Box>

                </Box>
            </div>

            <div style={{ backgroundColor: "black" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", borderBottom: "1px solid black" }} >


                    <Box
                        sx={{
                            width: 758,
                            height: 580,
                            backgroundColor: 'white',
                            borderBottom:"1px solid black"


                        }}
                    >
                        <Typography variant="h1" sx={{ color: "black", width: "60%", margin: "auto", fontFamily: "Soehne web buch sans-serif", lineHeight: "5rem", marginTop:"50px"}}>
                        Learn more about us. Or join us.
                        </Typography>


                    </Box>

                    <Box
                        sx={{
                            width: 760,
                            height: 581,
                            backgroundColor: 'white',
                            borderBottom:"1px solid black"


                        }}
                    >
                        <Typography variant="h2" sx={{ color: "black", width: "70%", margin: "auto",  fontFamily: "Soehne web buch sans-serif", marginTop:"50px"}}>
                        The Medium blog
                        </Typography>
                        <Typography variant="h5" sx={{ color: "black", width: "70%", margin: "auto",  fontFamily: "Soehne web buch sans-serif", lineHeight:"1.6rem"}}>
                        Visit our company blog for the latest news,<br /> product updates, and tips and tricks.
                        </Typography>

                        <Box 
                        sx={{
                           
                            width:"80%",
                            margin:"auto",
                            marginTop:"50px"
                        }}>
                              
                        <Link to="#">
                        
                        <button className="read_blog_btn">Read our blog </button>
                        </Link>
                        </Box>
                        <hr style={{marginTop:"20px"}}/> 
                        <Box
                        sx={{
                            


                        }}
                    >
                        <Typography variant="h2" sx={{ color: "black", width: "70%", margin: "auto",  fontFamily: "Soehne web buch sans-serif", marginTop:"50px"}}>
                        Work at Medium
                        </Typography>
                        <Typography variant="h5" sx={{ color: "black", width: "70%", margin: "auto",  fontFamily: "Soehne web buch sans-serif", lineHeight:"1.6rem"}}>
                        Our team is home to engineers, journalists, artists, <br /> and creatives of all stripes.

.
                        </Typography>
                        <Box 
                        sx={{
                           
                            width:"80%",
                            margin:"auto",
                            marginTop:"50px"
                        }}>
                              
                        <Link to="#">
                        
                        <button className="read_blog_btn">View open positions</button>
                        </Link>
                        </Box>
                            </Box>

                    </Box>

                    <Box
                        sx={{
                            width: 758,
                            height: 580,
                            backgroundColor: 'white',


                        }}
                    >
                    
                <box 

                >
                    <iframe src="https://player.vimeo.com/video/448735219?api=1&background=1&mute=1&loop=1" width="100%" height="100%" positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </box>
                
                        

                    </Box>
                    <Box
                        sx={{
                            width: 758,
                            height: 580,
                            backgroundColor: 'white',


                        }}
                    >
                        <Typography variant="h1" sx={{ color: "black", width: "78%", margin: "auto", fontFamily: "Soehne web buch sans-serif", lineHeight: "5rem", marginTop:"50px"}}>
                        Read, write, and expand your world.
                        </Typography>
                       <Box 
                        sx={{
                           
                           width:"80%",
                           margin:"auto",
                           marginTop:"50px"
                       }}>
                             
                       <Link to="#">
                       
                       <button className="get_started_btn">Get started </button>
                       </Link>
                       </Box>
                    </Box>

                </div>

            </div>

             <Box
             sx={{
                width:"100%",
                margin:"auto"
             }}
             >
                 <Box
             sx={{
                width:"50%",
                margin:"auto"
             }}
             >

             <Typography variant="h1" sx={{ color: "black", width: "50%", margin: "auto", fontFamily: "Soehne web buch sans-serif",  marginTop:"50px"}}>
                       Medium
                        </Typography>
               
             </Box>
             <div>
                <ul style={{display:"flex", flexDirection: "row", width: "50%", margin : "auto", listStyle : "none", marginLeft: "575px", fontSize: "10px"}}>
                    <li style={{padding: "2%"}}>Terms</li>
                    <li style={{padding: "2%"}}>Privacy</li>
                    <li style={{padding: "2%"}}>Help</li>
                </ul>
             </div>
             </Box>

        </>
    )
}