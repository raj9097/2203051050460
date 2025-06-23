import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import Analytics from './components/Analytics';
import Login from './components/Login';
import Signup from './components/Signup';
import RedirectHandler from './components/RedirectHandler';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/main.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<LinkForm />} />
            <Route path="/links" element={<PrivateRoute><LinkList /></PrivateRoute>} />
            <Route path="/analytics" element={<PrivateRoute><Analytics /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/:shortCode" element={<RedirectHandler />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
}

export default App;