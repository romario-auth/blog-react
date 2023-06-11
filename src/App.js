import CreatePost from './components/CreatePost/index';
import TopWelcome from './components/TopWelcome/';

function App() {
    return (
        <div className="App">
            <TopWelcome />
            <div className="leftcolumn">
                <CreatePost />
            </div>

            <div className="rightcolumn">
                <p>Infos about this:blog</p>
            </div>

        </div>
    );
}

export default App;
