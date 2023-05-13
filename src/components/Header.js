import React, { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <h1>My Blog</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
      )}
      <div className="user">
        {isLoggedIn ? (
          <div className="user-info" onClick={()=>handleDropdown}>
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <span>Username</span>
            <i className="fas fa-chevron-down"></i>
            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/settings">Settings</a></li>
                  <li><button onClick={()=>handleLogout}>Logout</button></li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button className="login-btn" onClick={()=>handleLogin}>Login</button>
        )}
      </div>
    </header>
  );
};

export default Header;
