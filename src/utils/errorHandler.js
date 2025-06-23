export const handleError = (error) => {
  let message = 'An unexpected error occurred. Please try again later.';

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    message = error.response.data.message || message;
  } else if (error.request) {
    // The request was made but no response was received
    message = 'No response received from the server. Please check your network connection.';
  } else {
    // Something happened in setting up the request that triggered an Error
    message = error.message;
  }

  return message;
};