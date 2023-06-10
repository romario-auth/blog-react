import CreatePost from './components/CreatePost/index';
import TopWelcome from './components/TopWelcome/';

function App() {
    return (
        <div className="App">
            <TopWelcome />
            <div class="leftcolumn">
                <CreatePost placeholder="Enter the post title" />
            </div>

            <div class="rightcolumn">
                <p>Infos about this:blog</p>
            </div>

        </div>
    );
}

export default App;
