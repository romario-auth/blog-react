import './CreatePost.css'
import { useState } from 'react';
import DropDown from '../DropDown/index';

const CreatePost = () => {

    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    };

    function codePost(title) {
        let codePost = String(Math.random());
        return title.replace(' ', '') + codePost.replace('0.', '');
    }

    const language = [
        'English',
        'French',
        'Portuguese',
        'Spanish'
    ]

    return (
        <div>
            <section className="create-post">
                <form>
                    <p>Post code: {codePost(message)}</p>

                    <DropDown label="Language" language={language} />

                    <h2>Add New Post: <small>"{message}"</small></h2>

                    <label>Post Title:</label>
                    <input onChange={handleChange} name="postTitle" placeholder="Enter the post title" />

                    <label>Post Image:</label>
                    <input onChange={handleChange} name="postImage" placeholder="Url from image" />

                    <label>Write your post:</label>
                    <textarea name="postContent" rows={4} cols={60} />

                    <hr />
                    <button type="reset" className="button-4">Reset edits</button>
                    <button type="submit" className="button-3">Save post</button>
                </form>
            </section>
        </div>
    )
}

export default CreatePost