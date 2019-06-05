import React from 'react';
import { Link } from 'react-router-dom'
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './common.scss';

 export const Header = () => {
   return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <div className="nav-container">
          <div className="site-brand">
            <FontAwesomeIcon icon={faTasks} />
            <Link className="navbar-brand" to="/">Daily-Manager</Link>
          </div>
          <div className="user-section">
            <Link to="/login">Signin</Link>
            <Link to="#">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
    );
 }
