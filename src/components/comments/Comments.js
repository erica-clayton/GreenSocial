import { useContext } from "react"
import "./comments.scss"
import {AuthContext} from "../../context/authContext"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    return (
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic} alt="profile pic" />
            <input type="text" placeholder="write a commnet"/>
            <button>Grow</button>
            </div>
            {Comments.map(comment =>(
                <div className="comment">
                    <img src={comment.profilePicture} alt="profile pic" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
        }</div>
    )
}

export default Comments