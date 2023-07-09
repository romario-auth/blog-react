import './ShowPost.css'

const ShowPost = (props) => {
    return (
        <section className="show-post">
            <h2>{props.postTitle}</h2>
            <h5>{props.postLanguage}, {props.postCreated}</h5>
            <img src={props.postImage} alt={props.postTitle} />
            <p>{props.postContent}</p>
        </section>
    )
}

export default ShowPost