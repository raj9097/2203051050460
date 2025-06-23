import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { redirectToOriginalUrl } from '../api'; // Assume this function handles the redirection logic
import useLogger from '../hooks/useLogger';

const RedirectHandler = () => {
  const { shortCode } = useParams();
  const logAction = useLogger();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        await redirectToOriginalUrl(shortCode);
        logAction('Redirected to original URL', { shortCode });
      } catch (error) {
        logAction('Redirect error', { shortCode, error });
       
      }
    };

    handleRedirect();
  }, [shortCode, logAction]);

  return <div>Redirecting...</div>;
};

export default RedirectHandler;