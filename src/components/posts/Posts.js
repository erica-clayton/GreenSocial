import "./posts.scss"

const Posts = () => {
    return (
        <div className="posts">
            {Posts.map(post=>(
                <div className="post">
                    {post.map(post=>(
                        <Post post={post} key={post.id}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Posts