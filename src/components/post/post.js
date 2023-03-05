import "./post.scss"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import  ShareOutlinedIcon from "@mui/icons-material";
import  TextsmsOutlinedIcon from "@mui/icons-material";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false)

    //Temp
    const liked = false

    return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="user photo" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                    <span className="name">{post.name}</span>
                    </Link>
                    <span className="date">1 min ago</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon/>
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="img"/>
        </div>
        <div className="info">
            <div className="item">
                {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/> }
                12 Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon/> 
                5 Comments
            </div>
            <div className="item">
                <ShareOutlinedIcon/> 
                Share
            </div>
        </div>
        {commentOpen && <Comments/>}
        </div>
    </div>
    );
};

export default Post