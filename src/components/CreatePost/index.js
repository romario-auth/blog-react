import './CreatePost.css'
import { useState } from 'react';
import DropDown from '../DropDown/index';
import Btn from '../Btn/Btn';

const CreatePost = () => {

    const [postLanguage, setPostLanguage] = useState('English');
    const [postTitle, setPostTitle] = useState('');
    const [postImage, setPostImage] = useState('http://');
    const [postContent, setPostContent] = useState('Words just words');
    
    const handleChangePostTitle = event => {
        setPostTitle(event.target.value);
    };
    const handleChangePostImage = event => {
        setPostImage(event.target.value)
    }
    const handleChangePostContent = event => {
        setPostContent(event.target.value)
    }

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

    const toSalve = (event) => {
        event.preventDefault()

        alert("Saving...\n\n" + postLanguage + '\n' + postTitle + '\n' + postImage + '\n' + postContent)
    }

    return (
        <div>
            <section className="create-post">
                <form onSubmit={toSalve}>
                    <p>Post code: {codePost(postTitle)}</p>

                    <DropDown
                        label="Language"
                        language={language}
                        requiredField="true"
                        value={postLanguage}
                        onChange={postLanguage => setPostLanguage(postLanguage)}
                    />

                    <h2>Add New Post: <small>"{postTitle}"</small></h2>

                    <label>Post Title:</label>
                    <input onChange={handleChangePostTitle} value={postTitle} placeholder="Enter the post title" required/>

                    <label>Post Image:</label>
                    <input onChange={handleChangePostImage} value={postImage} placeholder="Url from image" required />

                    <label>Write your post:</label>
                    <textarea onChange={handleChangePostContent} value={postContent} rows={4} cols={60} required/>

                    <hr />

                    <Btn type="reset" className="button-4">
                        Reset edits
                    </Btn>

                    <Btn type="submit" className="button-3">
                        Save post
                    </Btn>
                </form>
            </section>
        </div>
    )
}

export default CreatePost