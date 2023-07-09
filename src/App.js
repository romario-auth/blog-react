import { useState } from 'react';
import CreatePost from './components/CreatePost/index';
import TopWelcome from './components/TopWelcome/';

function App() {

    const [posts, setPosts] = useState([]);
    const addPost = (post) => {
        console.log(post);
    }

    return (
        <div className="App">
            <TopWelcome />
            <div className="leftcolumn">
                <CreatePost salvePost={ post => addPost(post)} />
            </div>

            <div className="rightcolumn">
                <p>Infos about this:blog</p>
            </div>

        </div>
    );
}

export default App;
