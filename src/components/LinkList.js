import React from 'react';

const LinkList = ({ links = [], onDelete, onViewAnalytics }) => {
  return (
    <div className="link-list">
      <h2>Your Shortened Links</h2>
      {links.length === 0 ? (
        <p>No links found. Please create a new short link.</p>
      ) : (
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <a href={link.shortUrl} target="_blank" rel="noopener noreferrer">
                {link.shortUrl}
              </a>
              <button onClick={() => onViewAnalytics(link.id)}>View Analytics</button>
              <button onClick={() => onDelete(link.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LinkList;