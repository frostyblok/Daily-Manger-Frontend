import React from 'react';
import './common.scss';

const AuthPage = (props) => {
  
  const welText =
    props.children._self.props.location.pathname === '/signup' ? 'Register' : 'Login'
  return ( 
    <div className="auth-page">
        <div className="container d-flex h-100">
          <div className="auth-card card align-self-center col-md-5">
            <div className="card-body">
              <h2 className="text-center">{welText}</h2>
              {props.children}
            </div>
          </div>
        </div>
      </div>
   );
}
 
export default AuthPage;
