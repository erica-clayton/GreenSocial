import {AuthContext} from "../../context/authContext"
import "./stories.scss"
import { useContext } from "react"

const Stories = () => {
    const {currentUser} = useContext(AuthContext)
    
    //TEMPORARY
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
           {Stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt=""/>
                <span>{story.name}</span>
            </div>
           ))}
            
            </div>
    )
}

export default Stories