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

                {posts.map(post =>

                    <ShowPost
                        key={post.postId}
                        postTitle={post.postTitle}
                        postCreatedAt={post.postCreatedAt}
                        postLanguage={post.postLanguage}
                        postImage={post.postImage}
                        postContent={post.postContent}
                        postId={post.postId}
                    ></ShowPost>

                )}

            </div>

            <div className="rightcolumn">
                <CreatePost salvePost={post => addPost(post)} />
            </div>

        </div>
    );
}

export default App;
