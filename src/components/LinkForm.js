import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { shortenUrl } from '../api';

const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const LinkForm = () => {
  const [url, setUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!user) {
      setError('You must be logged in to shorten URLs.');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL.');
      return;
    }

    try {
      await shortenUrl({ url, customCode, userId: user.id });
      setUrl('');
      setCustomCode('');
    } catch (err) {
      setError('Failed to create short link. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="link-form">
      <input
        type="url"
        placeholder="Enter URL to shorten"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Custom short code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <button type="submit">Shorten URL</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default LinkForm;