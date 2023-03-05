import "./profile.scss"

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Email, EmailOutlined, FacebookTwoTone, Language, Pinterest, Place } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import Posts from "../../components/posts/Posts"

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="" alt="" className="cover" />
                <img src="" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoTone fontSize="large"/>
                        </a>
                        <a href="http://instagram.com">
                            <Instagram fontSize="large"/>
                        </a>
                        <a href="http://pintrest.com">
                            <Pinterest fontSize="large"/>
                        </a>
                    </div>
                    <div className="center">
                        <span>Jane Doe</span>
                        <div className="info">
                            <div className="item">
                                <Place/>
                                <span>USA</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlined/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts/>
            </div>
            
        </div>
    )
}

export default Profile