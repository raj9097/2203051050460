# React URL Shortener Web App

A user-friendly client-side URL shortener application that allows users to shorten URLs, manage their links, and view analytical insights. The app includes authentication, error handling, and logging integration.

## Features

- **Authentication:** Sign up and log in to manage your links.
- **Short Link Uniqueness:** Each short code is unique, with optional custom codes.
- **Default Validity & Custom Short Code:** Users can specify a custom code or let the app generate one.
- **Redirection:** Visiting a short URL redirects to the original URL.
- **Analytics:** View click statistics for each short link.
- **Error Handling:** Robust error boundaries and user feedback.
- **Styling:** Clean, responsive UI with CSS.
- **Logging:** User actions and errors are logged for analytics/debugging.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation


1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm start
   ```

3. **Backend API:**
   - The app expects a backend running at `http://localhost:5000/api`.
   - Endpoints required: `/shorten`, `/urls`, `/analytics/:shortCode`, `/signup`, `/redirect/:shortCode`, etc.

## Project Structure

```
src/
  api/                # API calls (axios)
  auth/               # Auth context and private route
  components/         # React components (LinkForm, LinkList, Analytics, Login, Signup, RedirectHandler, ErrorBoundary)
  hooks/              # Custom hooks (e.g., useLogger)
  styles/             # CSS files
  App.js
  index.js
```

- **Shorten a URL:** Log in, enter a URL, and optionally a custom code. Click "Shorten URL".
- **View Links:** See all your shortened links and their analytics.
- **Analytics:** Click "View Analytics" to see click stats.
- **Redirection:** Accessing `/shortCode` in the browser redirects to the original URL.

## Logging
<div> <img src="" width="400" height="200" />
<img src="" width="400" height="200" />
</div>
<div> <img src="" width="400" height="200" />

</div>
User actions and errors are logged using a custom hook (`useLogger`). This can be extended to send logs to a backend or analytics service.

## Error Handling

The app uses an `ErrorBoundary` component to catch and display errors gracefully.



**Note:**  
This project is for educational/demo purposes. For production, ensure secure
