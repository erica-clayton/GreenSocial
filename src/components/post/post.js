import "./post.scss"
import { MoreHoriz } from "@mui/icons-material"

const Post = ({post}) => {
    return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.img} alt="user photo" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                    <span className="name">{post.name}</span>
                    <span className="date">1 min ago</span>
                    </Link>
                </div>
            </div>
            <MoreHoriz/>
        </div>
        <div className="content"></div>
        <div className="info"></div>
        </div>
    </div>
    )
}

export default Post