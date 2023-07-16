import './ShowPost.css'

const ShowPost = ({ postTitle, postLanguage, postCreatedAt, postImage, postContent, postId }) => {
    return (
        <section className="show-post">
            <h2>{postTitle}</h2>
            <h5>{postLanguage}, {postCreatedAt}, Id: {postId}</h5>
            <img src={postImage} alt={postTitle} />
            <p>{postContent}</p>
        </section>
    )
}

export default ShowPost