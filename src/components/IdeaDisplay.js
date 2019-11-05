import React from 'react';

export default function IdeaDisplay({ idea, closeIdea }) {

  const { quote, person } = idea

  return (
    <div className="idea-wrapper" onClick={closeIdea}>
      <p id="close-btn" onClick={closeIdea}><img src="https://img.icons8.com/ultraviolet/16/000000/close-window.png" alt="" /></p>
      <div className="idea-display">
        <img className="author-photo" src={person.picture} alt="author" />
        <div className="quote">
          <q>"{quote}"</q>
          <p>- {person.name}</p>
        </div>
      </div>
    </div>
  )
}