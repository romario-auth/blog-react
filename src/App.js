import { useState } from 'react';
import CreatePost from './components/CreatePost/';
import TopWelcome from './components/TopWelcome/';
import ShowPost from './components/ShowPost'
import Infos from './components/Infos/index';


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
                <Infos postCount={posts.length} lastPost={posts.sort(post => post.postCreatedAt)[0].postCreatedAt}></Infos>
            </div>

        </div>
    );
}

export default App;
