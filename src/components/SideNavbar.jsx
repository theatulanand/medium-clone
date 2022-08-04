import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
//import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import React, { useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
//import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Button, Popover } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../Redux/Auth/action"
import Home from './Home_BL/Home';
import { Routes } from '../Pages/Routes';

export const SideNavbar = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.auth.userData);
    console.log(data);
    const [home, setHome] = useState(false);
    const [noti, setNoti] = useState(false);
    const [book, setBook] = useState(false);
    const [article, setArticle] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleIcon = (iconName) => {
        switch (iconName) {
            case "home":
                setHome(true)
                setNoti(false)
                setBook(false)
                setArticle(false)
                setEdit(false)
                break;
            case "noti":
                setHome(false)
                setNoti(true)
                setBook(false)
                setArticle(false)
                setEdit(false)
                break;
            case "book":
                setHome(false)
                setNoti(false)
                setBook(true)
                setArticle(false)
                setEdit(false)
                break;
            case "article":
                setHome(false)
                setNoti(false)
                setBook(false)
                setArticle(true)
                setEdit(false)
                break;
            case "edit":
                setHome(false)
                setNoti(false)
                setBook(false)
                setArticle(false)
                setEdit(true)
                break;

            default:
                break;
        }
    }
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event) => {
        setAnchor(event.currentTarget);
        console.log("yash");
    }

    const handleLogout = () =>{
        dispatch(logout());
        window.location.reload(false);
    }

    return (
        <div style={{ width: "5.6%", borderRight: "1px solid gainsboro", position: "fixed", backgroundColor: "white", height: "50rem" }}>
            <div style={{ padding: "20%", marginBottom: "7rem", marginTop: "2rem" }}>
                <svg viewBox="0 0 1043.63 592.71" className="kp hu" style={{ width: "80%" }}><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
            </div>
            <div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <button style={{ backgroundColor: "white", border: "none"  , marginLeft: "20px", cursor: "pointer"}} onClick={() => handleIcon("home")}>
                        {home ? <HomeIcon /> : <HomeOutlinedIcon />}
                    </button>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <button style={{ backgroundColor: "white", border: "none" , marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("noti")}>
                        {noti ? <NotificationsActiveIcon /> : <NotificationsActiveOutlinedIcon />}
                    </button>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <button style={{ backgroundColor: "white", border: "none" , marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("book")}>
                        {book ? <BookmarksIcon /> : <BookmarksOutlinedIcon />}
                    </button>

                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <button style={{ backgroundColor: "white", border: "none" , marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("article")}>
                        {article ? <ArticleIcon /> : <ArticleOutlinedIcon />}
                    </button>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <button style={{ backgroundColor: "white", border: "none" , marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("edit")}>
                        {edit ? <EditIcon /> : <EditOutlinedIcon />}
                    </button>

                </div>
            </div>
            {/* <div style={{ marginBottom: "1.5rem" , marginLeft: "20px" }}>
                <DriveFileRenameOutlineIcon />
            </div> */}
            <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
            >
                <Button variant='Danger' onClick={() => { setAnchor(null); handleLogout() }}>Sign out</Button>
            </Popover>
            <button style={{ backgroundColor: "white", border: "none" }} onClick={openPopover}>
                <div style={{ marginTop: "7rem" }}>
                    <img style={{ width: "60%", borderRadius: "100%" }} src={data.imageUrl} alt="" />
                </div>
            </button>

        </div>
    )
}
