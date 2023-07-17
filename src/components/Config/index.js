import { useState } from 'react'
import './Config.css'

const Config = (props) =>
{
    const [blogTitle, setBlogTitle] = useState("My Personal Blog")

    const handleblogTitle = event => {
        setBlogTitle(event.target.value)

        props.changeBlogConfig({
            blogTitle: event.target.value
        })
    }

    return (
        <div className="config">
            <h3>Blog Title: </h3>
            <input onChange={handleblogTitle} value={blogTitle} placeholder="My Personal Blog" />        
        </div>
    )
}

export default Config