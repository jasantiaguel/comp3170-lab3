import news_feed from './sample_news_stories.json';
import Story from './components/Story';
import './index.css';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div className="feed">
        {stories.map((story) => (
          <Story story={story} />
        ))}
      </div>
    </div>
  );
}

export default App;
