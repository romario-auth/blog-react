import './CreatePost.css'
import { useState } from 'react';

const CreatePost = (props) => {

    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    };

    function codePost() {
        let code = String(Math.random());
        return code.replace('0.', '');
    }

    return (
        <div>
            <section className="create-post">
                <form>
                    <p>Post code: {codePost()}</p>
                    <h2>Add New Post: <small>"{message}"</small></h2>

                    <lable>Post Title:</lable>
                    <input onChange={handleChange} name="postTitle" placeholder={props.placeholder} />

                    <lable>Post Image:</lable>
                    <input onChange={handleChange} name="postImage" placeholder="Url from image" />

                    <lable>Write your post:</lable>
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