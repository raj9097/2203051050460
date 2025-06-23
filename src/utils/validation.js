export const validateUrl = (url) => {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
};

export const validateCustomCode = (code) => {
  const codePattern = /^[a-zA-Z0-9_-]{3,10}$/;
  return codePattern.test(code);
};

export const validateForm = (url, customCode) => {
  if (!validateUrl(url)) {
    return { valid: false, message: 'Invalid URL format.' };
  }
  if (customCode && !validateCustomCode(customCode)) {
    return { valid: false, message: 'Custom code must be 3-10 characters long and can include letters, numbers, underscores, or hyphens.' };
  }
  return { valid: true, message: '' };
};