import '../index.css';

export default function Story({ story }) {

  // Placeholder for stories
  const placeholderImage = 'https://placehold.co/140x80?text=News+Story';

  // Truncate description function
  function truncateDescription(description) {
    if (!description) return;
    if (description.length > 200) {
      return description.substring(0, 200) + '...';
    } 
  }

  // Delete story function
  function deleteStory(e) {
    if (e.target.className !== 'delete') return;
      e.currentTarget.remove();
  }

  return(
    <div className="story" onClick={deleteStory}>
      <span className="delete">x</span>
      <div className="story_header">
        <img className="story_image" src={story.image_url ? story.image_url : placeholderImage} alt="News Story" />
        <h1>
          <a href={story.link} target="_blank">{story.title}</a>
          <span className="story_creator">
            {story.creator}
          </span>
        </h1>
      </div>
      <p>{truncateDescription(story.description)}</p>
    </div>
  )
}