import React from 'react';
import './common.scss';

const AuthPage = (props) => {
  return ( 
    <div className="auth-page">
        <div className="container d-flex h-100">
          <div className="auth-card card align-self-center col-md-5">
            <div className="card-body">
              <h2 className="text-center">Welcome back</h2>
              {props.children}
            </div>
          </div>
        </div>
      </div>
   );
}
 
export default AuthPage;
