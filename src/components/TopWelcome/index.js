import './TopWelcome.css'

const TopWelcome = ({ blogTitle }) =>
{
    return (
        <header className="title-blog">
            <h1>{blogTitle}</h1>
        </header>
    )
}

export default TopWelcome