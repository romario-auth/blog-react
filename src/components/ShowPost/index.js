import './ShowPost.css'

const ShowPost = ({ postTitle, postLanguage, postCreated, postImage, postContent }) => {
    return (
        <section className="show-post">
            <h2>{postTitle}</h2>
            <h5>{postLanguage}, {postCreated}</h5>
            <img src={postImage} alt={postTitle} />
            <p>{postContent}</p>
        </section>
    )
}

export default ShowPost