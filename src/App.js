import { useState } from 'react';
import CreatePost from './components/CreatePost/';
import TopWelcome from './components/TopWelcome/';
import ShowPost from './components/ShowPost'

function App() {

    const [posts, setPosts] = useState([]);
    const addPost = (post) => {
        setPosts([...posts, post])
    }

    return (
        <div className="App">
            <TopWelcome />
            <div className="leftcolumn">
                <CreatePost salvePost={post => addPost(post)} />

                {posts.map( post =>

                    <ShowPost
                        postTitle={post.postTitle}
                        postCreated="Dec 7, 2017"
                        postLanguage={post.postLanguage}
                        postImage={post.postImage}
                        postContent={post.postContent}
                    ></ShowPost>

                )}

            </div>

            <div className="rightcolumn">
                <p>Infos about this:blog</p>
            </div>

        </div>
    );
}

export default App;
