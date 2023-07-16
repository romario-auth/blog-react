import './Infos.css'

const Infos = ({ postCount, lastPost }) => 
{
    return (
        <section className="infos">
            <h3>Blog statistics</h3>
            <p>Post published: { postCount }</p>
            <p>Last post: { lastPost }</p>
        </section>
    )
}

export default Infos