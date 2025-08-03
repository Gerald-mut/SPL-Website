import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function NotFound() {
  return (
    <div className='notfound-container'>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}
