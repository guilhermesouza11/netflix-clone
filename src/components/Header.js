import React from 'react';
import './Header.css';

export default ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="headerLogo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix Logo"/>
        </a>
      </div>
      <div className="headerUser">
        <a href="/">
          <img src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário Logo"/>
        </a>
      </div>
    </header>
  );
}