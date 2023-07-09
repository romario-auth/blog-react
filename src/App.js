import { useState } from 'react';
import CreatePost from './components/CreatePost/';
import TopWelcome from './components/TopWelcome/';
import ShowPost from './components/ShowPost'

function App() {

    const [posts, setPosts] = useState([]);
    const addPost = (post) => {
        console.log(post);
    }

    return (
        <div className="App">
            <TopWelcome />
            <div className="leftcolumn">
                <CreatePost salvePost={post => addPost(post)} />
                <ShowPost
                    postTitle="My first post"
                    postCreated="Dec 7, 2017"
                    postLanguage="English"
                    postImage="https://picsum.photos/id/237/900/500"
                    postContent="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                ></ShowPost>
            </div>

            <div className="rightcolumn">
                <p>Infos about this:blog</p>
            </div>

        </div>
    );
}

export default App;
